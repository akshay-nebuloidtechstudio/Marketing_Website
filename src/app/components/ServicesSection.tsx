import Link from "next/link";

interface ServiceItem {
	number: string;
	title: string[];
	description: string[];
	href: string;
}

const services: ServiceItem[] = [
	{
		number: "01",
		title: ["Performance", "Marketing"],
		description: ["Meta Ads, Google Ads,", "LinkedIn Ads"],
		href: "/services/performance-marketing",
	},
	{
		number: "02",
		title: ["SEO & GEO"],
		description: ["Be found everywhere —", "Google, AI Search, Local"],
		href: "/services/seo-geo",
	},
	{
		number: "03",
		title: ["Social Media &", "Content"],
		description: ["Scroll-stopping content that", "builds communities"],
		href: "/services/social-media-content",
	},
	{
		number: "04",
		title: ["Branding &", "Creative"],
		description: ["Distinctive identities that", "make an impact"],
		href: "/services/branding-creative",
	},
	{
		number: "05",
		title: ["Website & CRO"],
		description: ["High-converting websites", "built for growth"],
		href: "/services/website-cro",
	},
];

export default function ServicesSection() {
	return (
		<section id="services" className="w-full bg-white">
			<div
				className="site-container"
				style={{
					paddingTop: "125px",
					paddingBottom: "165px",
				}}
			>
				{/* Section Label: begins around y=315px */}
				<p
					className="font-medium uppercase text-[#8e8e93]"
					style={{
						fontSize: "10px",
						lineHeight: "1",
						letterSpacing: "0.14em",
						marginBottom: "26px",
					}}
				>
					OUR SERVICES
				</p>

				{/* Header Row: Heading on left, Intro + Link on right */}
				<div className="flex items-start justify-between w-full">
					{/* Left Heading: width ~700px */}
					<h2
						className="font-bold text-[#111111]"
						style={{
							maxWidth: "700px",
							minWidth: 0,
							fontSize: "37px",
							lineHeight: "1.25",
							letterSpacing: "-0.025em",
						}}
					>
						<span className="block">Everything your brand needs</span>
						<span className="block">
							to{" "}
							<span
								className="font-serif italic font-normal"
								style={{ fontStyle: "italic" }}
							>
								grow.
							</span>
						</span>
					</h2>

					{/* Right Intro Column: width ~590px */}
					<div
						className="flex flex-col items-end"
						style={{
							maxWidth: "590px",
							minWidth: 0,
						}}
					>
						<p
							className="text-[#6b7280] font-normal"
							style={{
								fontSize: "15px",
								lineHeight: "23px",
								width: "100%",
							}}
						>
							From strategy to execution, we build digital marketing solutions
							that attract, engage and convert your ideal customers.
						</p>

						<Link
							href="/services"
							className="inline-flex items-center text-black font-semibold hover:text-neutral-600 transition-colors"
							style={{
								fontSize: "14px",
								marginTop: "26px",
								gap: "6px",
							}}
						>
							Explore All Services
							<span style={{ fontSize: "14px" }}>→</span>
						</Link>
					</div>
				</div>

				{/* Service Cards: Responsive Grid of 5 cards */}
				<div
					className="grid grid-cols-5 w-full"
					style={{
						marginTop: "72px",
						gap: "21px",
					}}
				>
					{services.map((service) => (
						<div
							key={service.number}
							className="flex flex-col bg-[#fafafa] border border-[#eeeeee] transition-colors w-full"
							style={{
								minWidth: 0,
								height: "345px",
								borderRadius: "15px",
								padding: "26px",
							}}
						>
							{/* Card Number */}
							<span
								className="font-medium text-[#8e8e93]"
								style={{
									fontSize: "11px",
									lineHeight: "1",
								}}
							>
								{service.number}
							</span>

							{/* Card Title */}
							<h3
								className="font-bold text-[#111111]"
								style={{
									fontSize: "17px",
									lineHeight: "22px",
									marginTop: "38px",
								}}
							>
								{service.title.map((line) => (
									<span key={line} className="block">
										{line}
									</span>
								))}
							</h3>

							{/* Card Description */}
							<p
								className="font-normal text-[#6b7280]"
								style={{
									fontSize: "13px",
									lineHeight: "19px",
									marginTop: "14px",
								}}
							>
								{service.description.map((line) => (
									<span key={line} className="block">
										{line}
									</span>
								))}
							</p>

							{/* Arrow Button */}
							<div
								className="mt-auto flex items-center justify-center bg-white border border-[#e5e7eb] rounded-full shadow-none"
								style={{
									width: "30px",
									height: "30px",
								}}
							>
								<svg
									width="11"
									height="11"
									viewBox="0 0 12 12"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-[#111111]"
									aria-hidden="true"
								>
									<path d="M3 9L9 3M9 3H4.5M9 3V7.5" />
								</svg>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
