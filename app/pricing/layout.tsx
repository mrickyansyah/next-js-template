import LandingLayout from "@/components/Layouts/LandingLayout";

interface PricingLayoutProps {
    children: React.ReactNode;
}

export default function PricingLayout({ children }: PricingLayoutProps) {
    return (
        <LandingLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    {children}
                </div>
            </section>
        </LandingLayout>
    );
}
