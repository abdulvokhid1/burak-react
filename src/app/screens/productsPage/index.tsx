import { Route, Switch, useRouteMatch } from "react-router-dom";
import Products from "./Products";
import ChosenProducts from "./ChosenProduct";
import "../../../css/products.css"
import { CartItem } from "../../../lib/types/search";


interface ProductPageProps {
  onAdd: (item: CartItem) => void
}
 export default function ProductsPage( props: ProductPageProps) {
  const {onAdd} = props;
  const products = useRouteMatch();
    return (
    <div className="products-page">
     <Switch>
     <Route path={`${products.path}/:productId`}>
        <ChosenProducts onAdd= {onAdd}/>
      </Route>
      <Route path={`${products.path}`}>
        <Products onAdd = {onAdd}/> 
      </Route>
     </Switch>
    </div>
    );
  }
  