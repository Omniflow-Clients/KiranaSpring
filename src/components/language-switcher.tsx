import { GlobeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type SupportedLanguage, useLanguage } from "@/hooks/use-language";

export function LanguageSwitcher() {
	const { language, languages, changeLanguage } = useLanguage();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<GlobeIcon className="size-5" />
					<span className="sr-only">Select language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{Object.entries(languages).map(([code, { nativeName }]) => (
					<DropdownMenuItem
						key={code}
						onClick={() => changeLanguage(code as SupportedLanguage)}
						className="cursor-pointer"
					>
						<span
							className={
								language === code ? "font-medium" : "text-muted-foreground"
							}
						>
							{nativeName}
						</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
