interface SectionProps {
    children: React.ReactNode;
    className?: string;
    bgWhite?: boolean;
}

export default function Section({ children, className = '', bgWhite = false }: SectionProps) {
    return (
        <section className={`section-padding ${bgWhite ? 'bg-white' : ''} ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
