import Link from "next/link";

export default function CtaSection() {
	return (
		<section
			id="cta"
			className="w-full"
			style={{
				height: "250px",
				background:
					"linear-gradient(105deg, #eef5f8 0%, #f6f5ee 55%, #faf8f3 100%)",
			}}
		>
			<div className="site-container flex items-center justify-between h-full">
				{/* Left Content */}
				<div className="flex flex-col justify-center" style={{ minWidth: 0 }}>
					{/* Small Eyebrow */}
					<p
						className="font-semibold uppercase text-[#555555]"
						style={{
							fontSize: "9px",
							letterSpacing: "0.14em",
							lineHeight: "1",
							marginBottom: "14px",
						}}
					>
						LET&apos;S BUILD TOGETHER
					</p>

					{/* Main Heading */}
					<h2
						className="text-[#111111]"
						style={{
							letterSpacing: "-0.025em",
						}}
					>
						<span
							className="block font-bold"
							style={{
								fontSize: "30px",
								lineHeight: "1.0",
							}}
						>
							Your next growth story
						</span>
						<span
							className="block font-serif italic font-normal text-[#111111]"
							style={{
								fontSize: "27px",
								lineHeight: "1.0",
								marginTop: "4px",
							}}
						>
							starts here.
						</span>
					</h2>
				</div>

				{/* Right CTA */}
				<div className="flex flex-col items-end justify-center shrink-0">
					{/* Black Pill Button */}
					<Link
						href="/contact"
						className="inline-flex items-center justify-center bg-black text-white rounded-full font-medium transition-colors hover:bg-neutral-800"
						style={{
							width: "205px",
							height: "43px",
							borderRadius: "999px",
							fontSize: "10px",
							gap: "8px",
						}}
					>
						Book a Free Consultation
						<span style={{ fontSize: "12px" }}>→</span>
					</Link>

					{/* Right Tagline */}
					<p
						className="font-serif italic font-normal text-[#71717a] text-right"
						style={{
							fontSize: "13px",
							lineHeight: "1.0",
							marginTop: "14px",
						}}
					>
						Simple. Strategic. Effective.
					</p>
				</div>
			</div>
		</section>
	);
}
