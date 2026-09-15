import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesSection() {
	return (
		<section id="case-studies" className="w-full bg-white">
			<div
				className="site-container"
				style={{
					paddingTop: "60px",
					paddingBottom: "100px",
				}}
			>
				{/* ============================================================ */}
				{/* ROW 1 — FEATURED CASE STUDY (3-column responsive layout)     */}
				{/* ============================================================ */}
				<div
					className="flex items-start justify-between w-full"
					style={{
						minHeight: "535px",
						gap: "clamp(24px, 4vw, 75px)",
					}}
				>
					{/* Left Content */}
					<div
						className="flex flex-col"
						style={{
							maxWidth: "580px",
							minWidth: 0,
							flex: "1 1 auto",
							paddingTop: "35px",
						}}
					>
						{/* Small Label */}
						<p
							className="font-medium uppercase text-[#8e8e93]"
							style={{
								fontSize: "9px",
								letterSpacing: "0.14em",
								lineHeight: "1",
							}}
						>
							FEATURED CASE STUDY
						</p>

						{/* Client Line */}
						<div
							className="flex items-center"
							style={{
								fontSize: "9px",
								marginTop: "6px",
								lineHeight: "1",
							}}
						>
							<span className="font-bold text-[#111111]">Velora</span>
							<span className="text-[#8e8e93] font-medium ml-1">
								/ D2C / LIFESTYLE
							</span>
						</div>

						{/* Main Heading */}
						<h3
							className="font-bold text-[#111111]"
							style={{
								fontSize: "clamp(24px, 2vw, 30px)",
								lineHeight: "1.08",
								letterSpacing: "-0.025em",
								marginTop: "25px",
								maxWidth: "560px",
							}}
						>
							<span className="block">From a new brand to 7-</span>
							<span className="block">figure revenue in 8 months.</span>
						</h3>

						{/* Statistics */}
						<div
							className="flex items-start flex-wrap"
							style={{
								marginTop: "35px",
								gap: "clamp(24px, 3vw, 48px)",
							}}
						>
							<div>
								<div
									className="font-bold text-[#111111]"
									style={{ fontSize: "23px", lineHeight: "1.1" }}
								>
									278%
								</div>
								<div
									className="text-[#8e8e93] font-normal"
									style={{ fontSize: "9px", marginTop: "5px" }}
								>
									Revenue Growth
								</div>
							</div>

							<div>
								<div
									className="font-bold text-[#111111]"
									style={{ fontSize: "23px", lineHeight: "1.1" }}
								>
									4.6x
								</div>
								<div
									className="text-[#8e8e93] font-normal"
									style={{ fontSize: "9px", marginTop: "5px" }}
								>
									ROAS
								</div>
							</div>

							<div>
								<div
									className="font-bold text-[#111111]"
									style={{ fontSize: "23px", lineHeight: "1.1" }}
								>
									150K+
								</div>
								<div
									className="text-[#8e8e93] font-normal"
									style={{ fontSize: "9px", marginTop: "5px" }}
								>
									New Customers
								</div>
							</div>
						</div>

						{/* Button */}
						<div style={{ marginTop: "30px" }}>
							<Link
								href="/case-studies/velora"
								className="inline-flex items-center justify-center bg-black text-white rounded-full font-medium transition-colors hover:bg-neutral-800"
								style={{
									height: "38px",
									paddingLeft: "22px",
									paddingRight: "22px",
									fontSize: "10px",
									gap: "6px",
								}}
							>
								View Case Study
								<span style={{ fontSize: "12px" }}>→</span>
							</Link>
						</div>
					</div>

					{/* Center Image */}
					<div
						className="relative overflow-hidden w-full"
						style={{
							maxWidth: "535px",
							aspectRatio: "1 / 1",
							borderRadius: "20px",
							minWidth: 0,
							flex: "0 1 535px",
						}}
					>
						<Image
							src="/case-study-skincare.jpg"
							alt="Velora skincare bottles case study"
							fill
							className="object-cover"
							sizes="(max-width: 1920px) 535px, 535px"
							priority
						/>
					</div>

					{/* Right Editorial */}
					<div
						className="flex flex-col shrink-0"
						style={{
							maxWidth: "270px",
							width: "100%",
							minWidth: 0,
							flex: "0 1 270px",
							paddingTop: "60px",
						}}
					>
						{/* Italic Serif Heading */}
						<h4
							className="font-serif italic font-normal text-[#111111]"
							style={{
								fontSize: "25px",
								lineHeight: "1.05",
							}}
						>
							<span className="block">Good brands</span>
							<span className="block">better people.</span>
						</h4>

						{/* Description */}
						<p
							className="text-[#6b7280] font-normal"
							style={{
								fontSize: "12px",
								lineHeight: "17px",
								marginTop: "16px",
								maxWidth: "240px",
							}}
						>
							A skincare brand built on simplicity, powered by strategy, scaled
							by performance.
						</p>

						{/* Carousel Indicator */}
						<div
							className="flex items-center"
							style={{
								marginTop: "30px",
								gap: "14px",
							}}
						>
							<span
								className="font-medium"
								style={{ fontSize: "10px", color: "#111111" }}
							>
								01 <span className="text-[#8e8e93] font-normal">/ 03</span>
							</span>

							<div className="flex items-center" style={{ gap: "6px" }}>
								<button
									type="button"
									className="flex items-center justify-center bg-white border border-[#e5e7eb] rounded-full hover:border-neutral-400 transition-colors"
									style={{ width: "20px", height: "20px" }}
									aria-label="Previous case study"
								>
									<svg
										width="8"
										height="8"
										viewBox="0 0 8 8"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-black"
										aria-hidden="true"
									>
										<path d="M5 1.5L2.5 4L5 6.5" />
									</svg>
								</button>

								<button
									type="button"
									className="flex items-center justify-center bg-white border border-[#e5e7eb] rounded-full hover:border-neutral-400 transition-colors"
									style={{ width: "20px", height: "20px" }}
									aria-label="Next case study"
								>
									<svg
										width="8"
										height="8"
										viewBox="0 0 8 8"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-black"
										aria-hidden="true"
									>
										<path d="M3 1.5L5.5 4L3 6.5" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* ============================================================ */}
				{/* ROW 2 — IMPACT (Image left, Content right)                  */}
				{/* ============================================================ */}
				<div
					className="grid w-full items-start"
					style={{
						marginTop: "115px",
						gridTemplateColumns: "minmax(0, 535px) minmax(0, 1fr)",
						gap: "clamp(40px, 6vw, 105px)",
					}}
				>
					{/* Left Image with Floating Metric Card */}
					<div
						className="relative overflow-hidden w-full"
						style={{
							maxWidth: "535px",
							aspectRatio: "535 / 465",
							borderRadius: "20px",
							minWidth: 0,
						}}
					>
						<Image
							src="/impact-forest.jpg"
							alt="Aerial view of dense rainforest canopy"
							fill
							className="object-cover"
							sizes="(max-width: 1920px) 535px, 535px"
						/>

						{/* Floating Metric Card */}
						<div
							className="absolute flex items-center justify-between"
							style={{
								left: "24px",
								bottom: "24px",
								width: "165px",
								height: "58px",
								backgroundColor: "rgba(248, 249, 250, 0.96)",
								backdropFilter: "blur(8px)",
								borderRadius: "10px",
								padding: "10px 16px",
								boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
							}}
						>
							<div>
								<div
									className="font-bold text-[#111111]"
									style={{ fontSize: "15px", lineHeight: "1.1" }}
								>
									+312%
								</div>
								<div
									className="text-[#8e8e93] font-normal"
									style={{ fontSize: "9px", marginTop: "3px" }}
								>
									Organic Traffic
								</div>
							</div>

							{/* Green upward graph line */}
							<svg
								width="36"
								height="18"
								viewBox="0 0 36 18"
								fill="none"
								aria-hidden="true"
							>
								<path
									d="M2 13L10 11L18 14L28 4"
									stroke="#10b981"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M22 4H28V10"
									stroke="#10b981"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>

					{/* Right Content */}
					<div
						className="flex flex-col"
						style={{
							maxWidth: "850px",
							minWidth: 0,
							paddingTop: "10px",
						}}
					>
						{/* Small Label */}
						<p
							className="font-medium uppercase text-[#8e8e93]"
							style={{
								fontSize: "9px",
								letterSpacing: "0.14em",
								lineHeight: "1",
							}}
						>
							OUR IMPACT
						</p>

						{/* Heading: REAL in bold sans-serif, RESULTS. in italic serif */}
						<h3
							style={{
								fontSize: "30px",
								lineHeight: "1.0",
								letterSpacing: "-0.02em",
								marginTop: "25px",
							}}
						>
							<span className="font-extrabold text-[#111111]">REAL </span>
							<span className="font-serif italic font-normal text-[#111111]">
								RESULTS.
							</span>
						</h3>

						{/* Description */}
						<p
							className="text-[#6b7280] font-normal"
							style={{
								fontSize: "13px",
								lineHeight: "1.6",
								marginTop: "25px",
							}}
						>
							We don&apos;t just run campaigns. We build brands, drive revenue
							and create long-term growth.
						</p>

						{/* Statistics */}
						<div
							className="flex items-start flex-wrap"
							style={{
								marginTop: "45px",
								gap: "clamp(30px, 4vw, 65px)",
							}}
						>
							<div>
								<div
									className="font-bold text-[#111111]"
									style={{ fontSize: "25px", lineHeight: "1.1" }}
								>
									50+
								</div>
								<div
									className="text-[#8e8e93] font-normal"
									style={{ fontSize: "9px", marginTop: "5px" }}
								>
									Brands Partnered
								</div>
							</div>

							<div>
								<div
									className="font-bold text-[#111111]"
									style={{ fontSize: "25px", lineHeight: "1.1" }}
								>
									4.8x
								</div>
								<div
									className="text-[#8e8e93] font-normal"
									style={{ fontSize: "9px", marginTop: "5px" }}
								>
									Avg. ROAS
								</div>
							</div>

							<div>
								<div
									className="font-bold text-[#111111]"
									style={{ fontSize: "25px", lineHeight: "1.1" }}
								>
									92%
								</div>
								<div
									className="text-[#8e8e93] font-normal"
									style={{ fontSize: "9px", marginTop: "5px" }}
								>
									Client Retention
								</div>
							</div>
						</div>

						{/* More Case Studies Link */}
						<div style={{ marginTop: "40px" }}>
							<Link
								href="/case-studies"
								className="inline-flex items-center text-[#111111] font-semibold hover:text-neutral-600 transition-colors"
								style={{
									fontSize: "10px",
									gap: "6px",
								}}
							>
								More Case Studies
								<span style={{ fontSize: "12px" }}>→</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
