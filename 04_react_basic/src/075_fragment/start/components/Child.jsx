import "./Child.css";

const Child = () => {
  return (
    // 余計なタグを出したくない時にFragmentで囲う。html変換した時にはなかったものとして扱われる
    // key属性のみつけられる。その時は <Fragment> と記述する必要がある
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate ea optio officiis tempora, voluptatum sit eaque iure aliquid, hic, nulla vero veritatis sed autem temporibus consectetur necessitatibus culpa praesentium.</p>
    </>
  );
};

export default Child;
