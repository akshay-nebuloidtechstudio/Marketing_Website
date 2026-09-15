export default function TrustedBrands() {
	return (
		<section
			id="trusted-brands"
			className="w-full bg-white border-b border-[#ededed]"
			style={{ height: "190px" }}
		>
			<div
				className="site-container flex flex-col h-full"
				style={{
					paddingTop: "42px",
				}}
			>
				{/* Small Eyebrow Label */}
				<p
					className="text-center font-medium uppercase text-[#8e8e93]"
					style={{
						fontSize: "9px",
						letterSpacing: "0.14em",
						lineHeight: "1",
						marginBottom: "23px",
					}}
				>
					TRUSTED BY AMBITIOUS BRANDS
				</p>

				{/* Brands Row */}
				<div
					className="flex items-center justify-between w-full flex-nowrap"
					style={{ height: "24px" }}
				>
					{/* Velora */}
					<span
						className="font-semibold select-none tracking-normal shrink-0"
						style={{ fontSize: "16px", color: "#6b7280" }}
					>
						Velora
					</span>

					{/* The MillKey Co. */}
					<span
						className="select-none inline-flex items-baseline shrink-0"
						style={{ fontSize: "16px", color: "#6b7280" }}
					>
						<span className="font-semibold tracking-normal">The MillKey</span>
						<span
							className="font-serif italic font-normal ml-1"
							style={{ fontSize: "17px" }}
						>
							Co.
						</span>
					</span>

					{/* valiah */}
					<span
						className="font-bold lowercase tracking-tight select-none shrink-0"
						style={{ fontSize: "17px", color: "#6b7280" }}
					>
						valiah
					</span>

					{/* caprix */}
					<span
						className="font-semibold lowercase tracking-normal select-none shrink-0"
						style={{ fontSize: "16px", color: "#6b7280" }}
					>
						caprix
					</span>

					{/* ASTRID */}
					<span
						className="font-bold uppercase select-none shrink-0"
						style={{
							fontSize: "15px",
							letterSpacing: "0.08em",
							color: "#6b7280",
						}}
					>
						ASTRID
					</span>

					{/* joyful */}
					<span
						className="font-semibold lowercase select-none shrink-0"
						style={{
							fontSize: "17px",
							letterSpacing: "-0.01em",
							color: "#6b7280",
						}}
					>
						joyful
					</span>
				</div>
			</div>
		</section>
	);
}
