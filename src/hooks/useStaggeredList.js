import { useTrail } from "react-spring";
import { animated } from "react-spring";

// num 是这里的参数，因为不同组件里不同
function useStaggeredList(num) {
  const trailAnimes = useTrail(num, {
    transform: "translate3d(0px,0px,0px)",
    from: {
      transform: "translate3d(-50px, 0px,0px)",
    },
    config: {
      mess: 0.8,
      tension: 280,
      friction: 20,
    },
    // delay: 200,    //会叠加动画delay 所以会很慢这里注释掉
  });

  return trailAnimes; //数组返回出去
}

// 把组件需要用到的值return出去，不确定的东西作为params
export default useStaggeredList;
export { animated };
