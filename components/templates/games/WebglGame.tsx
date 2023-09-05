import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";



function WebglGame() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "https://www.dropbox.com/scl/fi/2fh0hw3qb5li7ul5qg7f1/WEBGL.loader.js?rlkey=1oh3a37bg89mp8dmz19bjuih9&dl=0",
    dataUrl: "https://www.dropbox.com/scl/fi/cshzk67goybnowcqariia/WEBGL.data?rlkey=z3hom1jjrks6v3ga7fvbcnl9w&dl=0",
    frameworkUrl: "https://www.dropbox.com/scl/fi/fsx8a0xukw8t48n6v9dwr/WEBGL.framework.js?rlkey=edgln4cy0cvyw14q9q3zv7bf6&dl=0",
    codeUrl: "https://www.dropbox.com/scl/fi/0reppfjlw33mlzstpshn9/WEBGL.wasm?rlkey=ubqo9832ef3k941u93r6swq1y&dl=0",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default WebglGame;