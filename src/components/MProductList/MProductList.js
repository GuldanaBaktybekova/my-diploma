import MProductItem from "./MProductItem/MProductItem";
import classes from "./MProductList.module.css";

function MProductList({ men }) {
  const mproductItems = men.map(man => (
    <MProductItem key={man.manId} man={man} />
  ));

  return (
    <div className={classes.MProductList}>
      {mproductItems}
    </div>
  );
}

export default MProductList;