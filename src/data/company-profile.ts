import type { LucideIcon } from "lucide-react";
import {
	Gauge,
	Globe,
	Handshake,
	Lightbulb,
	Mail,
	MapPin,
	PhoneCall,
	Settings2,
	ShieldCheck,
	Target,
} from "lucide-react";

export type IconComponent = LucideIcon;

export type HeroHighlight = {
	icon: IconComponent;
	value: string;
	label: string;
};

export type ProductLine = {
	title: string;
	description: string;
	accent: string;
};

export type CompanyValue = {
	icon: IconComponent;
	title: string;
	description: string;
};

export type IndustrySegment = {
	title: string;
	description: string;
};

export type ProductionStage = {
	step: string;
	title: string;
	description: string;
};

export type TrustReason = {
	title: string;
	description: string;
};

export type ContactChannel = {
	icon: IconComponent;
	label: string;
	value: string;
	href?: string;
};

export const heroHighlights: readonly HeroHighlight[] = [
	{
		icon: Gauge,
		value: "30+ Tahun",
		label: "pengalaman manufaktur pegas sejak 1995.",
	},
	{
		icon: ShieldCheck,
		value: "QC Ketat",
		label: "untuk menjaga presisi, elastisitas, dan ketahanan material.",
	},
	{
		icon: Settings2,
		value: "Custom Design",
		label: "sesuai gambar, dimensi, dan spesifikasi pelanggan.",
	},
	{
		icon: Handshake,
		value: "Mitra Tepercaya",
		label: "untuk kebutuhan industri skala kecil hingga besar.",
	},
];

export const productLines: readonly ProductLine[] = [
	{
		title: "Compression Spring",
		description:
			"Pegas tekan untuk aplikasi elektronik, otomotif, dan sistem mekanikal.",
		accent:
			"Dirancang untuk bekerja stabil pada kebutuhan gaya tekan yang konsisten.",
	},
	{
		title: "Tension Spring",
		description:
			"Pegas tarik yang umum digunakan pada peralatan rumah tangga dan komponen industri.",
		accent:
			"Cocok untuk mekanisme yang membutuhkan gaya tarik dan kestabilan gerak.",
	},
	{
		title: "Torsion Spring",
		description:
			"Pegas puntir untuk mekanisme putar seperti engsel, clamp, dan sistem rotasi.",
		accent:
			"Dapat disesuaikan pada arah putar, sudut kerja, dan bentuk kaki pegas.",
	},
	{
		title: "Custom Spring & Wire Form",
		description:
			"Pengerjaan custom sesuai desain dan spesifikasi pelanggan untuk berbagai kebutuhan industri.",
		accent:
			"Fleksibel untuk kebutuhan bentuk, dimensi, material, dan karakter kerja yang lebih spesifik.",
	},
];

export const missionPoints: readonly string[] = [
	"Menghasilkan produk berkualitas tinggi yang presisi dan konsisten.",
	"Memberikan pelayanan terbaik kepada pelanggan.",
	"Mengembangkan inovasi dan efisiensi dalam proses produksi.",
	"Membangun hubungan jangka panjang dengan mitra industri.",
];

export const coreValues: readonly CompanyValue[] = [
	{
		icon: Target,
		title: "Precision",
		description: "Detail adalah prioritas kami dalam setiap proses produksi.",
	},
	{
		icon: Handshake,
		title: "Integrity",
		description:
			"Komitmen dan kepercayaan menjadi fondasi dalam setiap kerja sama.",
	},
	{
		icon: ShieldCheck,
		title: "Quality",
		description:
			"Konsisten dalam kualitas produk dan pelayanan kepada pelanggan.",
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		description:
			"Terus berkembang dan beradaptasi mengikuti kebutuhan industri.",
	},
];

export const industrySegments: readonly IndustrySegment[] = [
	{
		title: "Industri Elektronika",
		description:
			"Komponen pegas untuk kebutuhan perakitan, sub-assembly, dan produk elektronik.",
	},
	{
		title: "Industri Otomotif",
		description:
			"Produk spring untuk aplikasi otomotif yang membutuhkan konsistensi performa.",
	},
	{
		title: "Peralatan Rumah Tangga",
		description:
			"Pegas untuk mekanisme peralatan rumah tangga dan kebutuhan appliance manufacturing.",
	},
	{
		title: "Mekanikal & Engineering",
		description:
			"Solusi pegas untuk mesin, fixture, peralatan industri, dan custom manufacturing.",
	},
];

export const productionStages: readonly ProductionStage[] = [
	{
		step: "01",
		title: "Incoming QC",
		description:
			"Pemeriksaan material awal untuk memastikan kesesuaian spesifikasi sebelum produksi dimulai.",
	},
	{
		step: "02",
		title: "Pre Production",
		description:
			"Pemasangan kawat ke mesin, proses coiling, dan pengecekan ukuran dasar.",
	},
	{
		step: "03",
		title: "Production",
		description:
			"Heat treatment, grinding, pelapisan atau finishing, dan presetting sesuai kebutuhan produk.",
	},
	{
		step: "04",
		title: "Outgoing QC",
		description:
			"Final check untuk memverifikasi dimensi, fungsi, dan konsistensi sebelum pengiriman.",
	},
	{
		step: "05",
		title: "Packing",
		description:
			"Pengemasan rapi dan aman untuk menjaga kualitas produk selama distribusi.",
	},
];

export const qualityCommitments: readonly string[] = [
	"Ketepatan dimensi",
	"Konsistensi elastisitas",
	"Ketahanan material",
	"Keamanan dalam penggunaan",
];

export const trustReasons: readonly TrustReason[] = [
	{
		title: "Pengalaman Lebih dari 30 Tahun",
		description:
			"Sejak 1995, kami memahami kebutuhan industri dan standar presisi yang dibutuhkan dalam setiap komponen pegas.",
	},
	{
		title: "Fleksibel untuk Custom Design",
		description:
			"Kami menerima pesanan sesuai desain dan spesifikasi pelanggan untuk berbagai kebutuhan industri.",
	},
	{
		title: "Presisi & Konsistensi Kualitas",
		description:
			"Setiap produk diproduksi dengan kontrol kualitas ketat untuk memastikan dimensi, elastisitas, dan ketahanan material.",
	},
	{
		title: "Mitra Industri Terpercaya",
		description:
			"Telah dipercaya oleh perusahaan elektronika dan manufaktur seperti Polytron serta berbagai industri di wilayah Semarang dan Solo.",
	},
];

export const contactChannels: readonly ContactChannel[] = [
	{
		icon: MapPin,
		label: "Alamat",
		value: "Jl. Lingkar Utara UMK (timur Djarum Oasis), Kudus 59325",
	},
	{
		icon: Globe,
		label: "Website",
		value: "kiranaspring.com",
		href: "https://kiranaspring.com",
	},
	{
		icon: Mail,
		label: "Email",
		value: "prima.kirana.spring@gmail.com",
		href: "mailto:prima.kirana.spring@gmail.com",
	},
	{
		icon: PhoneCall,
		label: "Telepon / WhatsApp",
		value: "081-330-339-909",
		href: "tel:081330339909",
	},
];

export const socialChannels: readonly string[] = [
	"Instagram: prima.kirana.spring",
	"TikTok: prima.kirana.spring",
];
