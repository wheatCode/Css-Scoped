import './parent.scoped.scss';
import Child from './Child';
function Parent() {
  return (
    <div>
        <div className="parentBox">Parent
            <Child></Child>
        </div>
    </div>
  );
}

export default Parent;
