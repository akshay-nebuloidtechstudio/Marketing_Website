import Link from "next/link";

const footerLinks = [
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Terms of Service", href: "/terms" },
	{ label: "LinkedIn", href: "https://linkedin.com" },
	{ label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
	return (
		<footer
			className="w-full bg-[#090909]"
			style={{
				height: "125px",
			}}
		>
			<div className="site-container flex items-center justify-between h-full">
				{/* Left Column: Logo and Copyright */}
				<div className="flex flex-col justify-center" style={{ minWidth: 0 }}>
					<span
						className="font-bold text-white leading-none"
						style={{
							fontSize: "15px",
							letterSpacing: "0.04em",
						}}
					>
						NEBULOID
					</span>

					<p
						className="text-[#71717a] font-normal"
						style={{
							fontSize: "7px",
							letterSpacing: "0.02em",
							marginTop: "8px",
							lineHeight: "1",
						}}
					>
						© 2025 Nebuloid Digital Marketing Agency, Dehradun, India. All rights
						reserved.
					</p>
				</div>

				{/* Right Column: Footer Links */}
				<ul
					className="flex items-center shrink-0"
					style={{
						gap: "30px",
					}}
				>
					{footerLinks.map((link) => (
						<li key={link.label}>
							<Link
								href={link.href}
								className="text-[#a1a1aa] font-normal transition-colors hover:text-white"
								style={{
									fontSize: "8px",
									letterSpacing: "0.02em",
								}}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
