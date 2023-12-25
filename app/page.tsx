"use client";

import Image from "next/image";
import logoWhite from "@/public/assets/logo-white.svg";
import megaphone from "@/public/assets/megaphone.webp";
import umihanaAvatar from "@/public/assets/umihana.webp";
import mirza from "@/public/assets/mirza.webp";
import muamera from "@/public/assets/muamera.webp";
import Card from "@/components/Card";
import compas from "@/public/assets/compas-icon.svg";
import pen from "@/public/assets/pen-icon.svg";
import magaphoneIcon from "@/public/assets/megaphone-icon.svg";
import hat from "@/public/assets/hat-icon.svg";
import Review from "@/components/Review";
import lunatik from "@/public/assets/lunatik-logo.svg";
import edukabh from "@/public/assets/edukabh.svg";
import tarik from "@/public/assets/tarik-avatar.webp";
import planjax from "@/public/assets/planjax-logo.png";
import medina from "@/public/assets/medina-avatar.webp";
import amra from "@/public/assets/amra-avatar.webp";
import boreas from "@/public/assets/boreas.png";
import koteks from "@/public/assets/koteks-logo.png";
import adisa from "@/public/assets/adisa-avatar.webp";
import facebook from "@/public/assets/facebook.svg";
import instagram from "@/public/assets/instagram.svg";
import linkedin from "@/public/assets/linkedin.svg";
import phonecode from "@/public/assets/phone-code.svg";
import hand from "@/public/assets/hand-icon.svg";
import { Element, scroller } from "react-scroll";
import Services from "@/components/Services";

export default function Home() {
	return (
		<main className="container mx-auto">
			<Element name="hero">
				<section className="px-6 flex flex-col relative h-[100vh] sm:h-[100vh] sm:px-20">
					<nav className="flex items-center gap-2 py-2 z-10">
						<Image src={logoWhite} alt="logo" height={55} />
						<span className="text-white font-medium">Conversa</span>
					</nav>
					<Image
						src={megaphone}
						className="absolute sm:right-[50px] sm:h-[700px] 2xl:h-[900px] sm:top-10 sm:w-auto"
						alt="megaphone"
					/>
					<div className="z-10 mt-[350px] sm:mt-[160px] 2xl:mt-[250px] flex flex-col sm:gap-6">
						<h1 className="text-4xl sm:text-5xl leading-[3rem] sm:leading-[4rem] text-white font-black tracking-wide">
							Učimo brendove
							<br /> da{" "}
							<mark className="bg-amber-300 px-2 py-[1px] tracking-wide">
								govore!
							</mark>
						</h1>
						<p className="text-white text-sm mt-6 w-[280px] sm:text-xl sm:w-[500px]">
							Komunicirajte snažno i autentično da ostavite nezaboravan
							utisak u digitalnom, ali i realnom svijetu.
						</p>
						<div className="mt-10 pb-20">
							<button
								onClick={() => {
									scroller.scrollTo("contact", {
										duration: 1500,
										delay: 100,
										smooth: true,
										offset: -50,
									});
								}}
								className="bg-amber-300 hover:bg-amber-200 px-16 py-3 sm:px-20 sm:py-4 sm:text-xl animate__animated animate__pulse animate__repeat-2 uppercase font-bold rounded-l-full rounded-r-full"
							>
								Kontaktiraj nas
							</button>
						</div>
					</div>

					<Image
						src={hand}
						alt="hand icon"
						className="absolute bottom-16 left-0 right-0 ml-auto mr-auto animate__infinite animate__animated animate__slideInUp"
					/>
				</section>
			</Element>
			<Element name="aboutus">
				<section className="bg-white px-6 py-10 flex flex-col sm:items-center gap-6 sm:rounded-3xl sm:gap-10 sm:px-20">
					<div>
						<span className="text-sm uppercase px-2 py-1 bg-amber-200 rounded-md">
							naša priča
						</span>
					</div>
					<h1 className="text-4xl font-bold sm:text-5xl">O nama</h1>
					<p className="text-sm text-slate-500 sm:text-center">
						Mi vjerujemo u moć priče. Naš cilj nije samo da povećamo
						vidljivost vašeg brenda na društvenim mrežama, već da kreiramo
						značajne i dugotrajne veze sa vašom ciljnom publikom. Također,
						pomažemo vam da unaprijedite poslovnu komunikaciju i javni
						nastup, kako biste ostavili autentičan pečat u poslovnom
						svijetu. Bilo da se radi o vašem brendu ili o vama lično, mi
						vam pomažemo da (is)pričate svoju poslovnu priču na
						najefikasniji način.
					</p>
					<div className="flex gap-3 sm:gap-6">
						<div className="relative w-[80px] h-[80px] rounded-full shadow-lg border border-amber-200">
							<Image
								alt="umihana avatar"
								src={umihanaAvatar}
								fill
								className="object-cover rounded-full"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<span className="font-medium text-md">
								Krličević Omerović Umihana
							</span>
							<span className="text-slate-400 text-sm">
								CEO - Conversa
							</span>
						</div>
					</div>
				</section>
			</Element>
			<Element name="services">
				<Services />
				<section className="flex flex-col px-6 py-10 gap-6 sm:gap-10 sm:px-20 sm:items-center">
					<div>
						<span className="text-sm uppercase px-2 py-1 bg-amber-200 rounded-md">
							usluge
						</span>
					</div>
					<div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
						<Card
							icon={compas}
							title="Social media marketing"
							description="Stručnjaci smo za društvene medije, specijalizirani za kreiranje i implementaciju efikasnih strategija koje povećava vidljivost vašeg brenda, privlači potencijalne klijente i jačaju lojalnost postojećih."
						/>
						<Card
							icon={pen}
							title="Izrada sadržaja"
							description="Kreiramo originalan, angažujući i prilagođen sadržaj za društvene mreže koji odražava vrijednosti vašeg brenda. Bilo da je riječ o dizajniranom sadržaju za post, story ili video, mi brinemo da svaki sadržaj priča jedinstvenu priču.
            "
						/>
						<Card
							icon={magaphoneIcon}
							title="Marketing i PR"
							description="Osmišljavamo i kreiramo marketing i PR kampanje, te pomažemo da komunicirate sa javnošću i u kriznim situacijama, što uključuje rad s medijima, organizaciju događaja i razvoj saradnje sa partnerima kako bi se višestruko doprinijelo povećanju prepoznatljivosti brenda.
            "
						/>
						<Card
							icon={hat}
							title="Edukacije i treninzi"
							description="Nudimo edukativne radionice za grupe / timove i pojedince u oblastima upravljanja društvenim mrežama, poslovna komunikacija i javni nastup. Naši treninzi su prilagođeni različitim nivoima znanja, od osnovnih principa do naprednih strategija i tehnika, sa fokusom na praktično učenje i interakciju.
            "
						/>
					</div>
				</section>
			</Element>
			<Element name="reviews">
				<section className="bg-white sm:rounded-t-3xl px-6 py-10 flex flex-col gap-6 sm:px-20 sm:items-center sm:gap-10">
					<div>
						<span className="text-sm uppercase px-2 py-1 bg-amber-200 rounded-md">
							recenzije
						</span>
					</div>
					<h1 className="text-4xl font-bold">
						Neka drugi govore umjesto nas
					</h1>
					<div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-20">
						<Review
							logo={lunatik}
							text={
								"Njihova sposobnost da stvore i sprovedu inovativne kampanje je zaista impresivna. Zahvaljujući njihovom stručnom vođstvu, uspjeli smo postići izvanredne rezultate u povećanju vidljivosti našeg brenda i angažmana na društvenim medijima. Conversa je definitivno pravi partner za sve marketinške i PR potrebe."
							}
							avatar={tarik}
							name="Tarik Čaplja"
							company="CEO - Lunatik d.o.o."
						/>
						<Review
							logo={planjax}
							text={
								"Conversa je pomogla našoj kompaniji da ostvari značajan napredak u oblasti odnosa s javnošću i digitalnog marketinga. Njihova kreativnost i stručnost u kreiranju kampanja su neosporni. Uspjeli smo povećati broj klijenata i poboljšati percepciju našeg brenda. Toplo preporučujemo Conversa svima koji traže partnera za marketinške i PR usluge."
							}
							avatar={mirza}
							name="Mirza Planjac"
							company="CEO  - Planjax Group d.o.o."
						/>
						<Review
							logo={koteks}
							text={
								"Conversa je pokazala visok nivo stručnosti i predanosti u svim aspektima marketinških i PR usluga koje su pružili. Njihov tim je bio veoma fleksibilan i brzo su se prilagodili našim potrebama. Zahvaljujući njihovoj podršci, uspjeli smo ostvariti znatne rezultate u poboljšanju naše online prisutnosti i povećanju interakcije s ciljnom publikom."
							}
							avatar={adisa}
							name="Adisa Karahodžić"
							company="CEO - Koteks d.o.o."
						/>
						<Review
							logo={boreas}
							text={
								"Petak i trening o javnom nastupu su mi bili jedan od onih life changing experience. Baš sam zahvalna i sretna što sam s vama provela dan. A, što se tiče Umihane, stvarno je superwoman i ima super moći. Jučer je moja konferencija tako dobro prošla i svi su dolazili da mi čestitaju na organizaciji i da govore kako sam super vodila program i svoj dio prezentacije."
							}
							avatar={amra}
							name="Amra Skrobo - Berberović"
							company="Marketing direktorica - Boreas d.o.o."
						/>
						<Review
							logo={edukabh}
							text={
								"Sa izuzetnim zadovoljstvom ističem uspješnu saradnju Centra za obrazovanje odraslih Eduka BH sa Conversom u oblasti edukacija iz poslovne komunikacije i javnog nastupa. Conversa se pokazala kao pouzdan partner, pružajući našim polaznicima visokokvalitetne i relevantne obuke koje su značajno unaprijedile njihove vještine."
							}
							avatar={muamera}
							name="Muamera Planjac"
							company="CEO - Eduka BH"
						/>
					</div>
				</section>
			</Element>
			<Element name="contact">
				<section className="bg-amber-200 sm:rounded-b-3xl px-6 py-10 flex flex-col sm:justify-between sm:flex-row gap-6 sm:px-20 sm:gap-10">
					<div className="flex flex-col gap-6">
						<div>
							<span className="text-sm uppercase px-2 py-1 text-amber-200 bg-slate-800 rounded-md">
								kontakt
							</span>
						</div>
						<h1 className="text-3xl font-bold text-slate-800">
							Pozovi nas za besplatnu konsultaciju
						</h1>
						<p className="text-slate-700 sm:w-[500px]">
							Pridruži se mnogobrojnim zadovoljnim klijentima i započnimo
							stvarati Vašu priču zajedno.
						</p>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col font-bold">
								<span>telefon</span>
								<span className="text-xl">+ 387 64 41 14 471</span>
							</div>
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col font-bold">
								<span>email</span>
								<span className="text-xl">conversa.ured@gmail.com</span>
							</div>
						</div>
					</div>
					<div className="hidden sm:flex sm:flex-col">
						<Image src={phonecode} height={230} alt="qr code logo" />
					</div>
				</section>
			</Element>
			<section className="bg-black px-6 py-10 flex flex-col gap-6 sm:px-20 sm:py-20">
				<h1 className="text-3xl font-bold text-white">
					Zaprati nas na socijalnim medijima
				</h1>
				<div className="flex flex-col gap-6 sm:grid sm:grid-cols-3">
					<a
						href="https://www.facebook.com/conversa.agency/"
						className="bg-amber-200 px-5 py-4 flex gap-6 items-center rounded-lg"
					>
						<Image src={facebook} alt="facebook icon" />
						<span className="text-amber-900">Facebook</span>
					</a>
					<a
						href="https://www.instagram.com/conversa_agency/"
						className="bg-amber-200 px-5 py-4 flex gap-6 items-center rounded-lg"
					>
						<Image src={instagram} alt="instagram icon" />
						<span className="text-amber-900">Instagram</span>
					</a>
					<a
						href="https://www.linkedin.com/company/conversa-agency/"
						className="bg-amber-200 px-5 py-4 flex gap-6 items-center rounded-lg"
					>
						<Image src={linkedin} alt="linkedin icon" />
						<span className="text-amber-900">LinkedIn</span>
					</a>
				</div>
			</section>
			<section className="bg-white sm:rounded-3xl px-6 py-10 flex flex-col gap-10 sm:px-20">
				<div className="flex flex-col gap-6">
					<h2 className="text-3xl font-bold">Navigacija</h2>
					<div className="flex flex-col sm:flex-row gap-10">
						<span
							className="text-xl font-regular hover:underline hover:cursor-pointer"
							onClick={() => {
								scroller.scrollTo("hero", {
									duration: 1500,
									delay: 100,
									smooth: true,
									offset: -50,
								});
							}}
						>
							Početna
						</span>
						<span
							className="text-xl font-regular hover:underline hover:cursor-pointer"
							onClick={() => {
								scroller.scrollTo("aboutus", {
									duration: 1500,
									delay: 100,
									smooth: true,
									offset: -50,
								});
							}}
						>
							O nama
						</span>

						<span
							className="text-xl font-regular hover:underline hover:cursor-pointer"
							onClick={() => {
								scroller.scrollTo("services", {
									duration: 1500,
									delay: 100,
									smooth: true,
									offset: -50,
								});
							}}
						>
							Usluge
						</span>
						<span
							className="text-xl font-regular hover:underline hover:cursor-pointer"
							onClick={() => {
								scroller.scrollTo("reviews", {
									duration: 1500,
									delay: 100,
									smooth: true,
									offset: -50,
								});
							}}
						>
							Recenzije
						</span>
					</div>
				</div>
				<div className="flex gap-3">
					<a
						href="https://www.facebook.com/conversa.agency/"
						className="h-[48px] w-[48px] bg-amber-200 flex justify-center items-center rounded-lg"
					>
						<Image src={facebook} alt="facebook icon" />
					</a>
					<a
						href="https://www.instagram.com/conversa_agency/"
						className="h-[48px] w-[48px] bg-amber-200 flex justify-center items-center rounded-lg"
					>
						<Image src={instagram} alt="instagram icon" />
					</a>
					<a
						href="https://www.linkedin.com/company/conversa-agency/"
						className="h-[48px] w-[48px] bg-amber-200 flex justify-center items-center rounded-lg"
					>
						<Image src={linkedin} alt="linkedin icon" />
					</a>
				</div>
				<span>Agencija za marketing i PR “Conversa” - 2023</span>
			</section>
			<a
				href="https://creative.lunatik.ba"
				className="bg-black text-amber-200 px-6 py-6 flex flex-col sm:text-center"
			>
				Dizajn i razvoj web stranice: lunatik.agency
			</a>
		</main>
	);
}
