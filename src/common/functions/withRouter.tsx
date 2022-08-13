import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
      const params = useParams();
      return (
        <Component
          {...props}
          router={{ params }}
        />
      );
    } 
    return ComponentWithRouterProp;
}
