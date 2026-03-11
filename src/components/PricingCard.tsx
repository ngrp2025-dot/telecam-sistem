import './PricingCard.css';

interface PricingCardProps {
    price: string;
    monthly: string;
}

export default function PricingCard({ price, monthly }: PricingCardProps) {
    return (
        <div className="pricing-card">
            <div className="pricing-header">
                <h3 className="pricing-price">{price}</h3>
                <p className="pricing-monthly">o {monthly}</p>
            </div>
            <div className="pricing-body">
                <p className="pricing-desc">Solución de seguridad integral adaptada a sus necesidades.</p>
                <button className="btn btn-primary pricing-btn" onClick={() => window.location.href = '/solicitar-presupuesto'}>
                    Solicitar presupuesto
                </button>
            </div>
        </div>
    );
}
