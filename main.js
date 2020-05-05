const showResult = result => {
  result.rest.map(item => {
    $("#table").append(
      `<tr><td>${item.name}</td><td>${item.opentime}</td><td>${item.tel}</td><td>${item.address}</td><td><a href="${item.url}">店舗ページ</a></td></tr>`
    );
  });
};

$(function() {
  const url = "https://api.gnavi.co.jp/RestSearchAPI/v3/";
  // const params = {
  //   keyid: "64e2ff3d3d78700b866058e740cef888",
  //   name: "ホテルグランヴィア大阪 ロビーラウンジ",
  //   latitude: 34.702492,
  //   longitude: 135.495965,
  //   range: 3
  // };
  const params1 = {
    keyid: "64e2ff3d3d78700b866058e740cef888",
    // name: "",
    areacode_s: "AREAS3102",
    latitude: 34.702492,
    longitude: 135.495965,
    range: 2
  };

  $("#submit").on("click", () => {
    // params.keyid = $("#key").value;
    $.getJSON(url, params, result => {
      showResult(result);
    });
  });

  $("#shopName_submit").on("click", () => {
    // params1.keyid = $("#key").val();
    params1.areacode_s = $("#shop_name").val();
    $.getJSON(url, params1, result => {
      showResult(result);
    });
  });
});
