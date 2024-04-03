import { Route, Switch, useRouteMatch } from "react-router-dom";
import Products from "./Products";
import ChosenProducts from "./ChosenProducts";

 export default function ProductsPage() {
  const products = useRouteMatch();
    return (
    <div className="products-page">
     <Switch>
     <Route path={`${products.path}/:productId`}>
        <ChosenProducts/>
      </Route>
      <Route path={`${products.path}`}>
        <Products/>
      </Route>
     </Switch>
    </div>
    );
  }
  