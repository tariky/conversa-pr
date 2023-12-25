import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "animate.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Conversa - Učimo brendove da govore",
	description:
		"Conversa je specijalizirana za pružanje marketinga i PR usluga. Naša misija je da transformišemo vašu poslovnu viziju u stvarnost kroz kreativne i mjerljive marketinške strategije. U Conversi, razumijemo jedinstvene izazove s kojima se suočavaju moderne firme i nudimo prilagođena rješenja koja odgovaraju vašim specifičnim potrebama.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={raleway.className}>{children}</body>
		</html>
	);
}
