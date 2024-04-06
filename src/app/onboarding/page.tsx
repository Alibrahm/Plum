
// import HomeWidgets from "../../components/widgets/gridLayout"

// export default function HomePage() {
//     return (
//         <HomeWidgets />
//     );
// }

import dynamic from "next/dynamic";

const Login = dynamic(() => import("../../components/samplelanding/landing"));

export default Login;  