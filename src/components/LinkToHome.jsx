import { Link } from "react-router-dom";
import iconcafe from '../imagen/ps_coffee-hot.png'

export default function LinkToHome({className}) {
    return (
        <div className={className}>
            <Link className="text-2xl" to="/">cafedealtura.com </Link><img src={iconcafe} alt="coffee" />
        </div>
    )
}