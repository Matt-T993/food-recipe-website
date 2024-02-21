
//Skeleton loader for category 
export const CategorySkeleton = () => {
  return (
    <div className="skeleton__category--loader">
      <div className="skeleton__category--image"></div>
      <div className="skeleton__category--text"></div>
    </div>
  );
};

//Skeleton loader for recipes 
export const RecipesSkeleton = () => {
  return (
    <div className="skeleton__recipes--loader">
      <div className="skeleton__recipes--image"></div>
      <div className="skeleton__recipes--text"></div>
    </div>
  );
};
