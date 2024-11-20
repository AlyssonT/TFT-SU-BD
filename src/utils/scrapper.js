const champsNames = [...document.querySelectorAll(".m-1xvjosc")].map((elem) => {
    return elem.innerHTML.replace("'", "");
  });
  console.log(champsNames);
  
  const champsTraits = [...document.querySelectorAll(".m-gtr5yh")].map((elem) => {
    return elem.innerText.split("\n");
  });
  console.log(champsTraits);
  
  const champsCost = [...document.querySelectorAll(".m-s5xdrg")].map((elem) => {
    return elem.innerText;
  });
  console.log(champsCost);
  
  const SET = 13;
  const champJson = {};
  
  champsNames.forEach((champ, index) => {
    champJson[champ] = {
      id: champ,
      name: champ,
      tier: parseInt(champsCost[index]),
      image: {
        full: `TFT${SET}_${champ}.TFT_Set${SET}.png`,
      },
    };
  });
  
  const jsonString = JSON.stringify(champJson, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.download = `champions${SET}.json`;
  link.href = url;
  link.click();
  
  URL.revokeObjectURL(url);
  link.remove();
  