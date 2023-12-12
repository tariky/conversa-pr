import Image from "next/image";
import React from "react";

type Props = {
	logo: any;
	avatar: any;
	text: string;
	name: string;
	company: string;
};

export default function Review({ logo, avatar, text, name, company }: Props) {
	return (
		<div className="flex group sm:p-6 hover:bg-amber-200 hover:rounded-lg hover:cursor-pointer flex-col gap-6 border-slate-100 pb-10">
			<div className="flex">
				<Image src={logo} alt="logo" height={30} />
			</div>
			<p className="text-sm">{text}</p>
			<div className="flex gap-3">
				<div className="relative w-[60px] h-[60px] rounded-full shadow-lg border border-amber-200">
					<Image
						alt="avatar"
						src={avatar}
						fill
						className="object-cover rounded-full"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<span className="font-medium text-md">{name}</span>
					<span className="text-slate-400 text-sm group-hover:text-amber-800">
						{company}
					</span>
				</div>
			</div>
		</div>
	);
}
