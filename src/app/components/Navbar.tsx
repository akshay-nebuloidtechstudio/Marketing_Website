import Link from "next/link";

const navLinks = [
	{ label: "Services", href: "/services" },
	{ label: "Work", href: "/work" },
	{ label: "About", href: "/about" },
	{ label: "Insights", href: "/insights" },
	{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
	return (
		<header className="w-full bg-white relative z-50">
			<div
				className="site-container flex items-center justify-between"
				style={{
					paddingTop: "22px",
					paddingBottom: "22px",
				}}
			>
				{/* Logo: aligned to container left edge */}
				<Link href="/" className="flex flex-col shrink-0">
					<span
						className="font-extrabold text-black leading-none"
						style={{ fontSize: "15px", letterSpacing: "0.04em" }}
					>
						NEBULOID
					</span>
					<span
						className="font-medium text-neutral-400 uppercase leading-none"
						style={{
							fontSize: "7px",
							letterSpacing: "0.1em",
							marginTop: "2px",
						}}
					>
						Marketing for what&apos;s next
					</span>
				</Link>

				{/* Nav Links: centered */}
				<ul className="flex items-center" style={{ gap: "30px" }}>
					{navLinks.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className="font-normal text-neutral-700 transition-colors hover:text-black"
								style={{ fontSize: "13px" }}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				{/* CTA Button: aligned to container right edge */}
				<Link
					href="/contact"
					className="flex items-center shrink-0 bg-black text-white font-medium transition-colors hover:bg-neutral-800"
					style={{
						fontSize: "12px",
						height: "38px",
						paddingLeft: "20px",
						paddingRight: "20px",
						borderRadius: "999px",
						gap: "8px",
					}}
				>
					Start a Project
					<span style={{ fontSize: "13px" }}>→</span>
				</Link>
			</div>
		</header>
	);
}
