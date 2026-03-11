import './ServiceCard.css';

interface ServiceCardProps {
    title: string;
    description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div className="service-card">
            <div className="service-card-icon">
                <div className="icon-placeholder"></div>
            </div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-desc">{description}</p>
        </div>
    );
}
