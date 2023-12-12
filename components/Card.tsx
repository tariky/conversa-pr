import React from "react";
import Image from "next/image";

type Props = {
	icon: any;
	title: string;
	description: string;
};

export default function Card({ icon, title, description }: Props) {
	return (
		<div className="group hover:bg-amber-200 hover:cursor-pointer flex flex-col gap-3 px-5 py-4 border rounded-xl border-amber-200">
			<div className="relative bg-amber-200 group-hover:bg-amber-50 w-[48px] h-[48px] rounded-full flex items-center justify-center">
				<Image src={icon} alt="icon" />
			</div>
			<h2 className="text-white text-xl font-bold group-hover:text-black">
				{title}
			</h2>
			<p className="text-slate-300 text-sm group-hover:text-slate-700">
				{description}
			</p>
		</div>
	);
}
