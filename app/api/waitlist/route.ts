import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, city, userType, hearAboutUs } = body;

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email requis" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("waitlist").insert({
      email: email.trim().toLowerCase(),
      city: city?.trim() || null,
      user_type: userType || "particulier",
      hear_about_us: hearAboutUs?.trim() || null,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Cette adresse email est déjà inscrite." },
          { status: 409 }
        );
      }
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'inscription. Réessayez." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
