import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section
			className="w-full relative overflow-clip"
			style={{
				paddingTop: "72px",
				paddingBottom: "80px",
			}}
		>
			<div className="site-container">
				<div
					className="grid items-start w-full"
					style={{
						gridTemplateColumns: "minmax(0, 1fr) minmax(0, 600px)",
						gap: "clamp(40px, 5vw, 110px)",
					}}
				>
					{/* Left Content */}
					<div
						className="flex flex-col"
						style={{
							minWidth: 0,
							maxWidth: "600px",
							paddingTop: "55px",
						}}
					>
						{/* Eyebrow */}
						<p
							className="font-medium text-neutral-400 uppercase"
							style={{
								fontSize: "11px",
								letterSpacing: "0.15em",
								marginBottom: "20px",
							}}
						>
							Digital Marketing Agency — Dehradun
						</p>

						{/* Headline */}
						<h1 style={{ marginBottom: "24px" }}>
							<span
								className="block font-black text-black uppercase"
								style={{
									fontSize: "clamp(54px, 4.6vw, 88px)",
									lineHeight: "0.9",
									letterSpacing: "-0.03em",
								}}
							>
								Brands
							</span>
							<span
								className="block font-black text-black uppercase"
								style={{
									fontSize: "clamp(54px, 4.6vw, 88px)",
									lineHeight: "0.9",
									letterSpacing: "-0.03em",
								}}
							>
								That
							</span>
							<span
								className="block font-serif font-normal italic text-black"
								style={{
									fontSize: "clamp(52px, 4.5vw, 86px)",
									lineHeight: "0.95",
									marginTop: "4px",
								}}
							>
								Grow.
							</span>
						</h1>

						{/* Subline */}
						<p
							className="font-normal text-neutral-500"
							style={{
								fontSize: "16px",
								lineHeight: "1.6",
								marginBottom: "28px",
							}}
						>
							Strategy. Content. Performance. Real Business Growth.
						</p>

						{/* CTAs */}
						<div className="flex items-center" style={{ gap: "22px" }}>
							<Link
								href="/contact"
								className="inline-flex items-center bg-black text-white font-medium transition-colors hover:bg-neutral-800"
								style={{
									fontSize: "12px",
									height: "38px",
									paddingLeft: "24px",
									paddingRight: "24px",
									borderRadius: "999px",
									gap: "8px",
								}}
							>
								Start a Free Audit
								<span style={{ fontSize: "14px" }}>→</span>
							</Link>
							<Link
								href="/work"
								className="inline-flex items-center font-semibold text-black underline decoration-black/80 transition-colors hover:text-neutral-600"
								style={{
									fontSize: "12px",
									gap: "6px",
									textUnderlineOffset: "5px",
								}}
							>
								See Our Work
								<span style={{ fontSize: "14px" }}>→</span>
							</Link>
						</div>
					</div>

					{/* Right Column with Image and Decorative Glow */}
					<div
						className="relative flex justify-end items-start w-full"
						style={{ minWidth: 0 }}
					>
						{/* Decorative blurred circle */}
						<div
							className="absolute z-10 rounded-full pointer-events-none"
							style={{
								width: "150px",
								height: "150px",
								left: "-45px",
								bottom: "36%",
								background: "rgba(165, 230, 235, 0.35)",
								filter: "blur(50px)",
							}}
						/>

						{/* Arch-top image container */}
						<div
							className="relative overflow-hidden w-full"
							style={{
								maxWidth: "600px",
								aspectRatio: "580 / 704",
								borderRadius: "290px 290px 20px 20px",
							}}
						>
							<Image
								src="/hero.jpg"
								alt="Modern architecture in mountain forest"
								fill
								className="object-cover"
								sizes="(max-width: 1920px) 610px, 610px"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
