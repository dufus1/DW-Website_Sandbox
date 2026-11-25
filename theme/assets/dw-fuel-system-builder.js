/* ============================================================================
 * DeatschWerks Fuel System Builder — Shopify Storefront Engine & Canvas
 * Zero external dependencies · Real Shopify Variant IDs & Product Photos
 * ============================================================================ */
(function () {
  const root = document.getElementById('dw-fsb-root');
  if (!root) return;

  // Live DeatschWerks Sandbox SKU -> { v: variantId, p: price, h: handle, i: imageUrl }
  const LIVE_SKUS = {"8-03-110-010K":{"v":48912936403219,"p":117,"h":"8-03-110-010k-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/7bc96fc78f73c7475c83fa4932a8e3ce_03cbaad9-6600-4b72-a9fc-7b8b10535931.jpg?v=1716578116&width=160"},"8-03-160-010K":{"v":48912937025811,"p":169,"h":"8-03-160-010k-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/29739d9fecce48e9db9150c15421f577_578e0a07-23a0-43f9-8eea-d2e8f1572f63.jpg?v=1716578151&width=160"},"8-03-110-040K":{"v":47841923891475,"p":122,"h":"8-03-110-040k","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/8-03-110-040K.png?v=1751917563&width=160"},"9-201-1000":{"v":48912941777171,"p":109,"h":"9-201-1001","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9-201-1000_5593091a-92dd-4b90-aefc-45610057f23e.jpg?v=1716578529&width=160"},"9-307-1000":{"v":47842028421395,"p":189,"h":"9-307-1000","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9-307-1000_2b28e199-e143-4208-8295-0260e9a0fe72.jpg?v=1751918617&width=160"},"9-301-1000":{"v":48912942891283,"p":169,"h":"9-301-1001","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9-301-1000.jpg?v=1716578669&width=160"},"9-401-1001":{"v":48912944988435,"p":239,"h":"9-401-1002","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9-401-1001_4d7fe41b-c741-4ce2-af98-e94a0c12e381.jpg?v=1716578893&width=160"},"9-421-1000":{"v":47842062860563,"p":199,"h":"9-421-1000","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9-421-1000.jpg?v=1751919060&width=160"},"6-401-55ST":{"v":47842083406099,"p":1099,"h":"6-401-55st","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/a9c1d94225fb00ae33e2729bdab6235c_d64b1797-acc0-4f52-9c33-9bbf0a7d1d6c.jpg?v=1751916921&width=160"},"7-300":{"v":47842231320851,"p":259,"h":"7-300","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/7-300.jpg?v=1751917228&width=160"},"7-301-OE":{"v":47842231976211,"p":359,"h":"7-301-oe","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/7-301-OE_5ac46c24-9302-4667-9540-26f77c803007.jpg?v=1751917233&width=160"},"9-441-C101-0900":{"v":47842263859475,"p":489,"h":"9-441-c101-0900","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9-441-C101-0900.jpg?v=1751919411&width=160"},"16U-00-0050-4":{"v":48912910254355,"p":269,"h":"16u-00-0050-5","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16U-00-0050-4_f5b77d4d-dd43-444e-bcf7-0a579b962ef3.jpg?v=1716574324&width=160"},"9-301-7002":{"v":47842656813331,"p":799,"h":"9-301-7002","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/b37dd6677419f44d2501be74e13a4a40.jpg?v=1751918538&width=160"},"9-401-7030":{"v":47842657763603,"p":849,"h":"9-401-7030","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9-401-7030.jpg?v=1751918922&width=160"},"18U-00-0050-6":{"v":47842719957267,"p":389,"h":"18u-00-0050-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/18U-00-0050-6.jpg?v=1751913488&width=160"},"9-401-7032":{"v":51507051135251,"p":1399,"h":"9-401-7032","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9-401-7032.png?v=1751918938&width=160"},"6-301-30ST":{"v":68197903761683,"p":699,"h":"6-301-30st","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9-301-30ST-1_14878ffd-abb7-432e-87eb-859c81933113.png?v=1795630212&width=160"},"6-811-30ST":{"v":68197903696147,"p":1549,"h":"6-811-30st","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-811-30ST-1.png?v=1795630212&width=160"},"6-421-30ST":{"v":68197903728915,"p":729,"h":"6-421-30st","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-421-30ST-1.png?v=1795630212&width=160"},"16MX-00-1200-4":{"v":48912906617107,"p":569,"h":"16mx-00-1200-5","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16MX-00-1200-4_564d8a01-9c83-4a5d-bf0f-e473ddfbb3f3.jpg?v=1716573797&width=160"},"16M-00-1500-4":{"v":47842362982675,"p":859,"h":"16m-00-1500-4","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16m-00-1500-4.jpg?v=1751911949&width=160"},"16S-00-2200-4":{"v":48912909369619,"p":859,"h":"16s-00-2200-5","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16S-00-2200-4_fbcae0f7-1a0b-49ff-9a7f-663d45668fe1.jpg?v=1716574110&width=160"},"16U-00-0065-4":{"v":48912910385427,"p":269,"h":"16u-00-0065-5","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/eef1f3a27d9fc861beff912e21b208d4_268502d5-40be-4f94-b859-7e21e74b2144.jpg?v=1716574342&width=160"},"16U-00-0090-4":{"v":48912910713107,"p":379,"h":"16u-00-0090-5","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/e6fad30a948e1445333a7416c5086277_e4197858-5c11-48a7-bd2f-02fbf08e8ea1.jpg?v=1716574360&width=160"},"18U-00-0078-6":{"v":48912915759379,"p":409,"h":"18u-00-0078-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/bfa1fb731a761fa646430a10cf90672b.jpg?v=1716575235&width=160"},"18U-00-0088-6":{"v":48912915955987,"p":479,"h":"18u-00-0088-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/8be6730478794c5c2ab886cff7422161.jpg?v=1716575253&width=160"},"17U-00-0095-8":{"v":47842481307923,"p":719,"h":"17u-00-0095-8","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/17U-00-0095-8_3e703048-09ac-4b2a-9022-4fcc2db2c2d3.jpg?v=1751913197&width=160"},"16MX-00-1200-8":{"v":48912906748179,"p":1049,"h":"16mx-00-1200-9","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16MX-00-1200-8.jpg?v=1716573809&width=160"},"16MX-20-1200-8":{"v":47842484551955,"p":1049,"h":"16mx-20-1200-8","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16mx-20-1200-8.jpg?v=1751912314&width=160"},"16M-00-1500-8":{"v":47842487992595,"p":1589,"h":"16m-00-1500-8","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16m-00-1500-8_fad4dbb8-2ffe-4a6b-b428-1f55df48fc6c.jpg?v=1751911958&width=160"},"16M-20-1500-8":{"v":48912906256659,"p":1599,"h":"16m-20-1500-9","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16m-20-1500-8_9e95c36c-4199-48ad-ba8f-58c52a7389bb.jpg?v=1716573663&width=160"},"16S-00-2200-8":{"v":48912909533459,"p":1569,"h":"16s-00-2200-9","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16S-00-2200-8_ea64ef63-e987-402b-830d-e01b78ce3d6a.jpg?v=1716574123&width=160"},"17U-00-0050-8":{"v":47842520400147,"p":649,"h":"17u-00-0050-8","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/17U-00-0050-8.jpg?v=1751913150&width=160"},"17U-00-0072-8":{"v":47842530918675,"p":719,"h":"17u-00-0072-8","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/17U-21-0072-8.jpg?v=1751913182&width=160"},"16MX-20-1200-6":{"v":48912907862291,"p":819,"h":"16mx-20-1200-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16MX-20-1200-6_3851ff82-be99-46b3-b23b-bdcdcd9c11d5.jpg?v=1716573943&width=160"},"16M-00-1500-6":{"v":47842681422099,"p":1259,"h":"16m-00-1500-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16m-00-1500-6_3e208af0-96d9-4506-aebf-07d8105b2601.jpg?v=1751911954&width=160"},"16M-20-1500-6":{"v":47842688631059,"p":1259,"h":"16m-20-1500-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16m-20-1500-6_06d82f43-e08b-48cc-99c2-cd2af81c7f61.jpg?v=1751912071&width=160"},"16S-00-2200-6":{"v":47842696167699,"p":1229,"h":"16s-00-2200-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16S-00-2200-6.jpg?v=1751912438&width=160"},"16MX-00-1200-6":{"v":48912906682643,"p":819,"h":"16mx-00-1200-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16MX-00-1200-6_6b571508-6a2a-464f-856d-779bb11b8423.jpg?v=1716573803&width=160"},"6-02-0407":{"v":47841959248147,"p":10,"h":"6-02-0407","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0407.jpg?v=1751915072&width=160"},"6-02-0407-B":{"v":47841959674131,"p":10,"h":"6-02-0407-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0407-Ba.jpg?v=1751915076&width=160"},"6-02-0406":{"v":48912925032723,"p":9,"h":"6-02-406","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/1e4ebb89742cc1064642fbdeb4823eeb_c714ef74-243e-4e1d-a7b3-022e6e86d8b7.jpg?v=1716576732&width=160"},"6-02-0406-B":{"v":48912956358931,"p":9,"h":"6-02-0406-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/251d53d7448db6069a2110ce81b43950_9ba8d1ab-ffa0-430f-b25d-5bb0e6f46288.jpg?v=1716580902&width=160"},"6-02-0404":{"v":47842116731155,"p":8,"h":"6-02-0404","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0404a.jpg?v=1751915044&width=160"},"6-02-0404-B":{"v":47842118238483,"p":8,"h":"6-02-0404-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0404-Ba.jpg?v=1751915050&width=160"},"6-02-0405":{"v":48912924999955,"p":9,"h":"6-02-405","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/4d75b1c6b71c63d18eb5075a11f03ef1_1858c34e-a1ba-4b6c-9690-5420df681597.jpg?v=1716576724&width=160"},"6-02-0408":{"v":47842153333011,"p":10,"h":"6-02-0408","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0408.jpg?v=1751915082&width=160"},"6-02-0408-B":{"v":47842153758995,"p":10,"h":"6-02-0408-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0408-B.jpg?v=1751915087&width=160"},"6-02-0401":{"v":48912924967187,"p":10,"h":"6-02-401","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/f0f9ca1d5bbbe35b23e4cde77beaca68_f94b6661-6924-495f-9a63-089969655609.jpg?v=1716576691&width=160"},"6-02-0401-B":{"v":48912955703571,"p":10,"h":"6-02-0401-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/72abec02d737ed4469966e72bfd04deb_0da823c8-8b52-452c-b07f-e185e807a8b5.jpg?v=1716580862&width=160"},"6-02-0402":{"v":47842159853843,"p":10,"h":"6-02-0402","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0402.jpg?v=1751915029&width=160"},"6-02-0402-B":{"v":48912955867411,"p":10,"h":"6-02-0402-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0402-B.jpg?v=1716580870&width=160"},"6-02-0709":{"v":48912926048531,"p":13,"h":"6-02-709","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/8f5a503ed8bf7ba0b17971f882dd6e4c_3df38f3d-3864-4756-9204-5e9a5a13a9f3.jpg?v=1716577038&width=160"},"6-1000-FRB":{"v":47842257994003,"p":169,"h":"6-1000-frb","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-1000-FRB.jpg?v=1751916778&width=160"},"6-1002-FRB":{"v":47842258387219,"p":139,"h":"6-1002-frb","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-1002-FRB.jpg?v=1751916806&width=160"},"6-2000-FRB":{"v":47842260156691,"p":169,"h":"6-2000-frb","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-2000-FRB.jpg?v=1751916863&width=160"},"6-01-G":{"v":48912923132179,"p":29,"h":"6-01-g-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-01-G_e8aee8d8-eb2b-48d0-bb72-6773debd5616.jpg?v=1716576154&width=160"},"16S-12-2200-8":{"v":48912909893907,"p":1569,"h":"16s-12-2200-9","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16S-12-2200-8_3c488ea6-2f59-43e0-85c1-0c9902b60a42.jpg?v=1716574265&width=160"},"16S-12-2200-6":{"v":48912909861139,"p":1229,"h":"16s-12-2200-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/16S-12-2200-6_3bafa634-4e1c-4de5-ab39-badb6a11de7d.jpg?v=1716574259&width=160"},"6-02-0826":{"v":48912928964883,"p":34,"h":"6-02-826","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/4c6ef27574a868930c238edc410c0624.jpg?v=1716577421&width=160"},"6-02-0820":{"v":48912928473363,"p":25,"h":"6-02-820","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9e07d535ffc8d0925f876083678afc51_90775b3e-4175-4053-b1f4-87ee9342fe20.jpg?v=1716577374&width=160"},"6-02-0872":{"v":47841970225427,"p":31,"h":"6-02-0872","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0872.jpg?v=1751916564&width=160"},"6-02-0823":{"v":47841970553107,"p":32,"h":"6-02-0823","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0823a.jpg?v=1751916250&width=160"},"6-02-0833":{"v":48912929030419,"p":39,"h":"6-02-833","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6659f76b1d43d845e09b40bbc3ec1bd7.jpg?v=1716577429&width=160"},"6-02-0804":{"v":47841978450195,"p":29,"h":"6-02-0804","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0804a.jpg?v=1751915998&width=160"},"6-02-0808":{"v":47841980743955,"p":37,"h":"6-02-0808","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0808a.jpg?v=1751916042&width=160"},"6-02-0810":{"v":48912927097107,"p":34,"h":"6-02-810","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/33bec062e1aecb71ffef8a4b58186002.jpg?v=1716577235&width=160"},"6-02-0802":{"v":48912926703891,"p":25,"h":"6-02-802","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/5a2d8e09a5458b00e6df36b12e3eb35a.jpg?v=1716577173&width=160"},"6-02-0851":{"v":47842076033299,"p":31,"h":"6-02-0851","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0851a.jpg?v=1751916311&width=160"},"6-02-0806":{"v":48912926802195,"p":28,"h":"6-02-806","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/008d7007049c9644ded6e4ffb054d7a6_cb7ddf0b-a058-494c-b5b1-ea46b9777921.jpg?v=1716577205&width=160"},"6-02-0405-B":{"v":47842120106259,"p":9,"h":"6-02-0405-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0405-B.jpg?v=1751915059&width=160"},"6-02-0811":{"v":47842190000403,"p":33,"h":"6-02-0811","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0811a.jpg?v=1751916072&width=160"},"6-02-0803":{"v":47842191540499,"p":25,"h":"6-02-0803","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0803a.jpg?v=1751915990&width=160"},"6-02-0852":{"v":47842191868179,"p":32,"h":"6-02-0852","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0852a.jpg?v=1751916321&width=160"},"6-02-0807":{"v":47842207596819,"p":27,"h":"6-02-0807","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0807a.jpg?v=1751916028&width=160"},"6-02-0809":{"v":48912926834963,"p":16,"h":"6-02-809","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/00d4b1e5df4ff58d2aefb6004d866ba9_9c65448d-b802-4c76-a4b5-698199f18436.jpg?v=1716577227&width=160"},"6-02-0801":{"v":48912926638355,"p":11,"h":"6-02-801","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/98f5deaa6e26274e7ca8a4289f4f5852.jpg?v=1716577165&width=160"},"6-02-0850":{"v":47842632401171,"p":15,"h":"6-02-0850","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0850a.jpg?v=1751916299&width=160"},"6-02-0805":{"v":47842634268947,"p":12,"h":"6-02-0805","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0805a.jpg?v=1751916007&width=160"},"6-02-0878":{"v":48912931553555,"p":37,"h":"6-02-878","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/5f8e162956f34c47824a7634d610088a_8622eb50-3998-4813-9b3b-084c7b7e5935.jpg?v=1716577716&width=160"},"6-02-0875":{"v":47841972191507,"p":35,"h":"6-02-0875","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0875.jpg?v=1751916588&width=160"},"6-02-0885":{"v":47841978155283,"p":39,"h":"6-02-0885","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0885a.jpg?v=1751916619&width=160"},"6-02-0853":{"v":47841979793683,"p":32,"h":"6-02-0853","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0853a.jpg?v=1751916331&width=160"},"6-02-0857":{"v":48912929587475,"p":37,"h":"6-02-857","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/2fc2daa66aed00fd2d48c16afd145d33_1676832f-8bc6-461e-aa1f-fe8eecdd733d.jpg?v=1716577493&width=160"},"6-02-0859":{"v":47842074493203,"p":37,"h":"6-02-0859","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0859a.jpg?v=1751916389&width=160"},"6-02-0802-B":{"v":48912958423315,"p":25,"h":"6-02-0802-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/cd82185d672843682dc772e7a82670b3.jpg?v=1716581301&width=160"},"6-02-0806-B":{"v":47842077901075,"p":28,"h":"6-02-0806-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0806-Ba.jpg?v=1751916020&width=160"},"6-02-0855":{"v":47842078458131,"p":35,"h":"6-02-0855","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0855a.jpg?v=1751916352&width=160"},"6-02-0811-B":{"v":47842190885139,"p":33,"h":"6-02-0811-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0811-Ba.jpg?v=1751916076&width=160"},"6-02-0860":{"v":47842191212819,"p":37,"h":"6-02-0860","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0860a.jpg?v=1751916399&width=160"},"6-02-0803-B":{"v":48912958488851,"p":25,"h":"6-02-0803-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/199a5a3020d54f7f2b786bf3e19edf67_d22534f1-bf53-4697-a6fc-21e719dd7697.jpg?v=1716581309&width=160"},"6-02-0807-B":{"v":47842207957267,"p":27,"h":"6-02-0807-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0807-Ba.jpg?v=1751916032&width=160"},"6-02-0856":{"v":47842208874771,"p":35,"h":"6-02-0856","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0856a.jpg?v=1751916361&width=160"},"6-02-0809-B":{"v":48912958652691,"p":16,"h":"6-02-0809-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/a09050175a174030162edd859c5a7ea7_b7e79fcb-0a77-47fd-8918-cab808209935.jpg?v=1716581355&width=160"},"6-02-0858":{"v":47842628763923,"p":21,"h":"6-02-0858","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0858A.jpg?v=1751916379&width=160"},"6-02-0801-B":{"v":47842630664467,"p":11,"h":"6-02-0801-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0801-Ba.jpg?v=1751915977&width=160"},"6-02-0850-B":{"v":47842634170643,"p":15,"h":"6-02-0850-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0850-Ba.jpg?v=1751916305&width=160"},"6-02-0805-B":{"v":48912958521619,"p":12,"h":"6-02-0805-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/67879877095fb5f82adc47ac4087bf7c.jpg?v=1716581325&width=160"},"6-02-0854":{"v":48912929095955,"p":17,"h":"6-02-854","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/1011743de28d05fa4f040b408f905f17_6718e1df-abdc-4a9b-be5d-8ba519001f17.jpg?v=1716577469&width=160"},"6-02-0814-10":{"v":48912927752467,"p":120,"h":"6-02-0814-11","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0814-10_cf51ae0b-4c8c-40a2-9dde-01ec359676f1.jpg?v=1716577286&width=160"},"6-02-0815-10":{"v":47841945387283,"p":80,"h":"6-02-0815-10","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0815-10.jpg?v=1751916144&width=160"},"6-02-0812-10":{"v":48912927392019,"p":80,"h":"6-02-0812-11","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0812-10.jpg?v=1716577251&width=160"},"6-02-0813-10":{"v":47841947615507,"p":100,"h":"6-02-0813-10","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/7b3636e51b9f15fb037e2668ceaa5048.jpg?v=1751916101&width=160"},"6-02-0814-20":{"v":48912927883539,"p":227,"h":"6-02-0814-21","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0814-20_2fed8c6a-394e-431e-96d0-6499c1f9843c.jpg?v=1716577292&width=160"},"6-02-0815-20":{"v":47841985954067,"p":152,"h":"6-02-0815-20","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0815-20.jpg?v=1751916148&width=160"},"6-02-0812-20":{"v":48912927490323,"p":152,"h":"6-02-0812-21","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0812-20_779ea66a-463d-45ee-ad4b-86729b070e0d.jpg?v=1716577257&width=160"},"6-02-0813-20":{"v":48912927588627,"p":188,"h":"6-02-0813-21","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0813-20.jpg?v=1716577275&width=160"},"6-02-0851-B":{"v":47842076066067,"p":31,"h":"6-02-0851-b","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0851-Ba.jpg?v=1751916316&width=160"},"6-02-0855-B":{"v":48912962060563,"p":35,"h":"6-02-0855-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/a6662b2a1ff4e46c1c2dac690f15c154.jpg?v=1716581490&width=160"},"6-02-0814-6":{"v":47842094383379,"p":74,"h":"6-02-0814-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0814-6.jpg?v=1751916139&width=160"},"6-02-0815-6":{"v":47842095857939,"p":50,"h":"6-02-0815-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0815-6.jpg?v=1751916161&width=160"},"6-02-0812-6":{"v":48912970678547,"p":50,"h":"6-02-0812-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0812-6_52816102-a3bc-4e05-9273-ed557c6157be.jpg?v=1716583442&width=160"},"6-02-0816-6":{"v":47842097103123,"p":62,"h":"6-02-0816-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0816-6.jpg?v=1751916181&width=160"},"6-02-0813-6":{"v":48912970711315,"p":62,"h":"6-02-0813-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0813-6_b952d8d4-41d5-4dd5-a81d-a018b5a79fce.jpg?v=1716583453&width=160"},"6-02-0860-B":{"v":48912962355475,"p":37,"h":"6-02-0860-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/00fab89e6a7f080655817b196b2e2337.jpg?v=1716581530&width=160"},"6-02-0852-B":{"v":48912960946451,"p":32,"h":"6-02-0852-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/13b18d5c0c0395908c22d3e98ff45c85_3ea3b242-98f7-49d2-a056-a3798187fe96.jpg?v=1716581466&width=160"},"6-02-0856-B":{"v":48912962126099,"p":35,"h":"6-02-0856-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/3f18363bbb2aa306dc71f67cf7dac818.jpg?v=1716581498&width=160"},"6-02-0858-B":{"v":48912962257171,"p":21,"h":"6-02-0858-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/9438341cb06a1935c99907346741fa32.jpg?v=1716581514&width=160"},"6-02-0854-B":{"v":48912961929491,"p":17,"h":"6-02-0854-b-1","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/82991b4147a9795284ac04c3dd824620_5a9b9355-887c-4da5-b7a3-72234436dada.jpg?v=1716581482&width=160"},"6-02-0817-10":{"v":47841943879955,"p":120,"h":"6-02-0817-10","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0817-10.jpg?v=1751916186&width=160"},"6-02-0863-10":{"v":48912930734355,"p":130,"h":"6-02-0863-11","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0863-10_0cf4bd47-5e38-4ccf-a205-6ceed1c89868.jpg?v=1716577561&width=160"},"6-02-0864-10":{"v":48912930767123,"p":110,"h":"6-02-0864-11","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0864-10_3e57871f-7019-4cde-a047-919aac5ecc98.jpg?v=1716577580&width=160"},"6-02-0861-10":{"v":48912929620243,"p":90,"h":"6-02-0861-11","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0861-10.jpg?v=1716577525&width=160"},"6-02-0865-10":{"v":47841947451667,"p":130,"h":"6-02-0865-10","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/402897dd88bc2412a8113e87fdb04e3a.jpg?v=1751916494&width=160"},"6-02-0816-10":{"v":47841947517203,"p":100,"h":"6-02-0816-10","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/dc88a1501428b7df83c6f7b08be5937b.jpg?v=1751916166&width=160"},"6-02-0862-10":{"v":47841947975955,"p":110,"h":"6-02-0862-10","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/882e46c00699d9f22e9a03b7f9c6490b.jpg?v=1751916429&width=160"},"6-02-0817-20":{"v":48912928375059,"p":227,"h":"6-02-0817-21","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/file_48d01cfa-167e-48e7-a3bb-8076037acf28.jpg?v=1782853542&width=160"},"6-02-0863-20":{"v":47841985364243,"p":246,"h":"6-02-0863-20","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6720a2cb1315cf49b20babe4fb840cb8.jpg?v=1751916454&width=160"},"6-02-0864-20":{"v":47841985560851,"p":208,"h":"6-02-0864-20","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/77d24c6322eafacd28b88d9acb020692.jpg?v=1751916475&width=160"},"6-02-0861-20":{"v":48912930537747,"p":171,"h":"6-02-0861-21","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0861-20_8b515141-01b1-407b-ad50-aa08d7930d56.jpg?v=1716577531&width=160"},"6-02-0865-20":{"v":48912930865427,"p":247,"h":"6-02-0865-21","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0865-20_3371b4b6-f9e1-4d77-a9c4-ce735057c372.jpg?v=1716577603&width=160"},"6-02-0816-20":{"v":47841987428627,"p":188,"h":"6-02-0816-20","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/8b589a62d4e252e3300a6c3f3229d2d8.jpg?v=1751916170&width=160"},"6-02-0862-20":{"v":48912930636051,"p":208,"h":"6-02-0862-21","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0862-20.jpg?v=1716577550&width=160"},"6-02-0817-6":{"v":48912970875155,"p":74,"h":"6-02-0817-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0817-6.jpg?v=1716583498&width=160"},"6-02-0863-6":{"v":47842094940435,"p":80,"h":"6-02-0863-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0863-6_268f94c2-4263-4d18-8999-821e3435ec2f.jpg?v=1751916466&width=160"},"6-02-0864-6":{"v":47842095661331,"p":68,"h":"6-02-0864-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0864-6.jpg?v=1751916490&width=160"},"6-02-0861-6":{"v":48912970940691,"p":56,"h":"6-02-0861-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0861-6_5156a095-dd39-47c3-a3a4-1c23d693e4bf.jpg?v=1716583510&width=160"},"6-02-0865-6":{"v":48912971464979,"p":80,"h":"6-02-0865-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0865-6_c9075871-0546-4e42-90fe-40814a97d163.jpg?v=1716583556&width=160"},"6-02-0862-6":{"v":48912971038995,"p":68,"h":"6-02-0862-7","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0862-6_f83a416c-37c4-497b-987a-df6efa4b3d52.jpg?v=1716583522&width=160"},"6-02-0866-10":{"v":48912930930963,"p":150,"h":"6-02-0866-11","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0866-10.jpg?v=1716577615&width=160"},"6-02-0866-20":{"v":47841984577811,"p":285,"h":"6-02-0866-20","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/049c26efc0003028295dbb8d4cdbb14b.jpg?v=1751916520&width=160"},"6-02-0866-6":{"v":47842094055699,"p":93,"h":"6-02-0866-6","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/6-02-0866-6.jpg?v=1751916532&width=160"},"FPHWK":{"v":"47842650882323","p":59,"h":"fphwk","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/FPHWK_9d8b96ee-9505-44a4-81e3-b823c95ac444.jpg?v=1751919877&width=160"},"FPHWK-10-HD":{"v":"47842267365651","p":79,"h":"fphwk-10-hd","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/FPHWK-10-HD_5f7c2dfa-eab1-4a41-89ec-c69ccc6631c8.jpg?v=1751919886&width=160"},"FPHWK-10-DP":{"v":"47842247377171","p":129,"h":"fphwk-10-dp","i":"https://cdn.shopify.com/s/files/1/0808/2033/8963/files/FPHWK-10-DP_017fd601-06bb-4fcb-b64d-c787fd17aeb4.jpg?v=1751919882&width=160"}};

  const FALLBACK_IMG = 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-image.png';

  function liveLookup(sku) {
    if (!sku) return null;
    const up = sku.toUpperCase();
    return LIVE_SKUS[up] || LIVE_SKUS[up.replace(/-B$/, '')] || null;
  }

  function livePrice(sku, fallback) {
    const m = liveLookup(sku);
    return (m && typeof m.p === 'number' && m.p > 0) ? m.p : fallback;
  }

  function liveImage(sku) {
    const m = liveLookup(sku);
    return (m && m.i) ? m.i : FALLBACK_IMG;
  }

  function liveUrl(sku) {
    const m = liveLookup(sku);
    return (m && m.h) ? '/products/' + m.h : '/search?q=' + encodeURIComponent(sku);
  }

  function liveVariantId(sku) {
    const m = liveLookup(sku);
    return m ? m.v : null;
  }

  // Bench-tested DeatschWerks pump flow curves (LPH @ 40..100 PSI, 13.5V)
  const PUMP_CURVES = {
    '9-201-1000': { 40: 280, 50: 262, 60: 242, 70: 224, 80: 208, 90: 186, 100: 160 },
    '9-301-1000': { 40: 340, 50: 325, 60: 305, 70: 290, 80: 275, 90: 255, 100: 235 },
    '9-307-1000': { 40: 340, 50: 320, 60: 295, 70: 275, 80: 260, 90: 240, 100: 220 },
    '9-401-1001': { 40: 416, 50: 398, 60: 380, 70: 361, 80: 343, 90: 327, 100: 313 },
    '9-421-1000': { 40: 420, 50: 405, 60: 390, 70: 372, 80: 355, 90: 336, 100: 318 },
    '9-441-C101-0900': { 40: 440, 50: 432, 60: 424, 70: 414, 80: 402, 90: 388, 100: 372 },
    '9-301-7002': { 40: 680, 50: 650, 60: 610, 70: 580, 80: 550, 90: 510, 100: 470 },
    '9-401-7030': { 40: 832, 50: 796, 60: 760, 70: 722, 80: 686, 90: 654, 100: 626 },
    '9-401-7032': { 40: 1248, 50: 1194, 60: 1140, 70: 1083, 80: 1029, 90: 981, 100: 939 },
    '6-301-30ST': { 40: 680, 50: 650, 60: 610, 70: 580, 80: 550, 90: 510, 100: 470 },
    '6-421-30ST': { 40: 840, 50: 810, 60: 780, 70: 744, 80: 710, 90: 672, 100: 636 },
    '6-401-55ST': { 40: 1248, 50: 1194, 60: 1140, 70: 1083, 80: 1029, 90: 981, 100: 939 },
    '6-811-30ST': { 40: 1620, 50: 1590, 60: 1560, 70: 1520, 80: 1470, 90: 1410, 100: 1340 }
  };

  const HOSE_MATRIX = {
    'CPE|6AN|SS':    { base: '6-02-0812', label: '6AN SS Double Braided CPE Hose',     prices: { 6: 52, 10: 80, 20: 152 } },
    'CPE|8AN|SS':    { base: '6-02-0813', label: '8AN SS Double Braided CPE Hose',     prices: { 6: 64, 10: 100, 20: 188 } },
    'CPE|10AN|SS':   { base: '6-02-0814', label: '10AN SS Double Braided CPE Hose',    prices: { 6: 76, 10: 120, 20: 227 } },
    'CPE|6AN|Nylon': { base: '6-02-0815', label: '6AN Black Nylon Braided CPE Hose',   prices: { 6: 52, 10: 80, 20: 152 } },
    'CPE|8AN|Nylon': { base: '6-02-0816', label: '8AN Black Nylon Braided CPE Hose',   prices: { 6: 64, 10: 100, 20: 188 } },
    'CPE|10AN|Nylon':{ base: '6-02-0817', label: '10AN Black Nylon Braided CPE Hose',  prices: { 6: 76, 10: 120, 20: 227 } },
    'PTFE|6AN|SS':   { base: '6-02-0861', label: '6AN SS Single Braided PTFE Hose',    prices: { 6: 58, 10: 90, 20: 171 } },
    'PTFE|8AN|SS':   { base: '6-02-0862', label: '8AN SS Single Braided PTFE Hose',    prices: { 6: 70, 10: 110, 20: 208 } },
    'PTFE|10AN|SS':  { base: '6-02-0863', label: '10AN SS Single Braided PTFE Hose',   prices: { 6: 84, 10: 130, 20: 246 } },
    'PTFE|6AN|Nylon':{ base: '6-02-0864', label: '6AN Black Nylon Braided PTFE Hose',  prices: { 6: 70, 10: 110, 20: 208 } },
    'PTFE|8AN|Nylon':{ base: '6-02-0865', label: '8AN Black Nylon Braided PTFE Hose',  prices: { 6: 84, 10: 130, 20: 247 } },
    'PTFE|10AN|Nylon':{base: '6-02-0866', label: '10AN Black Nylon Braided PTFE Hose', prices: { 6: 96, 10: 150, 20: 285 } }
  };

  const HOSE_ENDS = {
    'CPE|6AN|Straight':   { base: '6-02-0801', price: 11, name: '6AN Female Swivel Straight Hose End (CPE)' },
    'CPE|6AN|45':         { base: '6-02-0802', price: 25, name: '6AN Female Swivel 45° Hose End (CPE)' },
    'CPE|6AN|90':         { base: '6-02-0803', price: 25, name: '6AN Female Swivel 90° Hose End (CPE)' },
    'CPE|6AN|120':        { base: '6-02-0820', price: 28, name: '6AN Female Swivel 120° Hose End (CPE)' },
    'CPE|6AN|180':        { base: '6-02-0804', price: 29, name: '6AN Female Swivel 180° Hose End (CPE)' },
    'CPE|8AN|Straight':   { base: '6-02-0805', price: 12, name: '8AN Female Swivel Straight Hose End (CPE)' },
    'CPE|8AN|45':         { base: '6-02-0806', price: 28, name: '8AN Female Swivel 45° Hose End (CPE)' },
    'CPE|8AN|90':         { base: '6-02-0807', price: 27, name: '8AN Female Swivel 90° Hose End (CPE)' },
    'CPE|8AN|120':        { base: '6-02-0823', price: 32, name: '8AN Female Swivel 120° Hose End (CPE)' },
    'CPE|8AN|180':        { base: '6-02-0808', price: 37, name: '8AN Female Swivel 180° Hose End (CPE)' },
    'CPE|10AN|Straight':  { base: '6-02-0809', price: 16, name: '10AN Female Swivel Straight Hose End (CPE)' },
    'CPE|10AN|45':        { base: '6-02-0810', price: 34, name: '10AN Female Swivel 45° Hose End (CPE)' },
    'CPE|10AN|90':        { base: '6-02-0811', price: 33, name: '10AN Female Swivel 90° Hose End (CPE)' },
    'CPE|10AN|120':       { base: '6-02-0826', price: 39, name: '10AN Female Swivel 120° Hose End (CPE)' },
    'CPE|10AN|180':       { base: '6-02-0833', price: 42, name: '10AN Female Swivel 180° Hose End (CPE)' },
    'PTFE|6AN|Straight':  { base: '6-02-0850', price: 15, name: '6AN Female Swivel Straight Hose End (PTFE)' },
    'PTFE|6AN|45':        { base: '6-02-0851', price: 31, name: '6AN Female Swivel 45° Hose End (PTFE)' },
    'PTFE|6AN|90':        { base: '6-02-0852', price: 32, name: '6AN Female Swivel 90° Hose End (PTFE)' },
    'PTFE|6AN|120':       { base: '6-02-0872', price: 33, name: '6AN Female Swivel 120° Hose End (PTFE)' },
    'PTFE|6AN|180':       { base: '6-02-0853', price: 32, name: '6AN Female Swivel 180° Hose End (PTFE)' },
    'PTFE|8AN|Straight':  { base: '6-02-0854', price: 17, name: '8AN Female Swivel Straight Hose End (PTFE)' },
    'PTFE|8AN|45':        { base: '6-02-0855', price: 35, name: '8AN Female Swivel 45° Hose End (PTFE)' },
    'PTFE|8AN|90':        { base: '6-02-0856', price: 35, name: '8AN Female Swivel 90° Hose End (PTFE)' },
    'PTFE|8AN|120':       { base: '6-02-0875', price: 36, name: '8AN Female Swivel 120° Hose End (PTFE)' },
    'PTFE|8AN|180':       { base: '6-02-0857', price: 37, name: '8AN Female Swivel 180° Hose End (PTFE)' },
    'PTFE|10AN|Straight': { base: '6-02-0858', price: 21, name: '10AN Female Swivel Straight Hose End (PTFE)' },
    'PTFE|10AN|45':       { base: '6-02-0859', price: 37, name: '10AN Female Swivel 45° Hose End (PTFE)' },
    'PTFE|10AN|90':       { base: '6-02-0860', price: 37, name: '10AN Female Swivel 90° Hose End (PTFE)' },
    'PTFE|10AN|120':      { base: '6-02-0878', price: 42, name: '10AN Female Swivel 120° Hose End (PTFE)' },
    'PTFE|10AN|180':      { base: '6-02-0885', price: 45, name: '10AN Female Swivel 180° Hose End (PTFE)' }
  };

  const ADAPTERS = {
    '6ORB->6AN':  { base: '6-02-0404', price: 8,  name: '6AN ORB Male to 6AN Male Flare Adapter' },
    '8ORB->6AN':  { base: '6-02-0401', price: 9,  name: '8AN ORB Male to 6AN Male Flare Adapter' },
    '8ORB->8AN':  { base: '6-02-0402', price: 10, name: '8AN ORB Male to 8AN Male Flare Adapter' },
    '8ORB->10AN': { base: '6-02-0408', price: 10, name: '8AN ORB Male to 10AN Male Flare Adapter' },
    '10ORB->8AN': { base: '6-02-0406', price: 12, name: '10AN ORB Male to 8AN Male Flare Adapter' },
    '10ORB->10AN':{ base: '6-02-0407', price: 12, name: '10AN ORB Male to 10AN Male Flare Adapter' },
    '6ORB->8AN':  { base: '6-02-0405', price: 10, name: '6AN ORB Male to 8AN Male Flare Adapter' }
  };

  const COMPONENTS = [
    { id: 'pump-dw200', sku: '9-201-1000', category: 'pumps', role: 'pump', name: 'DW200 In-Tank Fuel Pump', subtitle: '255 LPH @ 43.5 PSI · E85 Safe', price: 109,
      ports: [{ id: 'out', label: 'Feed Out', side: 'left', dir: 'out', size: '6AN', thread: 'IN_TANK', kind: 'feed' }, { id: 'ret', label: 'Return In', side: 'bottom', dir: 'in', size: '6AN', thread: 'IN_TANK', kind: 'return' }, { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: { nominalLph: 255 } },
    { id: 'pump-dw300', sku: '9-301-1000', category: 'pumps', role: 'pump', name: 'DW300 In-Tank Fuel Pump', subtitle: '340 LPH @ 43.5 PSI · E85 Safe', price: 169,
      ports: [{ id: 'out', label: 'Feed Out', side: 'left', dir: 'out', size: '6AN', thread: 'IN_TANK', kind: 'feed' }, { id: 'ret', label: 'Return In', side: 'bottom', dir: 'in', size: '6AN', thread: 'IN_TANK', kind: 'return' }, { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: { nominalLph: 340 } },
    { id: 'pump-dw400', sku: '9-401-1001', category: 'pumps', role: 'pump', name: 'DW400 In-Tank Fuel Pump', subtitle: '415 LPH @ 43.5 PSI · High-Pressure', price: 239,
      ports: [{ id: 'out', label: 'Feed Out', side: 'left', dir: 'out', size: '8AN', thread: 'IN_TANK', kind: 'feed' }, { id: 'ret', label: 'Return In', side: 'bottom', dir: 'in', size: '6AN', thread: 'IN_TANK', kind: 'return' }, { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: { nominalLph: 415 } },
    { id: 'pump-dw440', sku: '9-441-C101-0900', category: 'pumps', role: 'pump', name: 'DW440 Brushless + Controller', subtitle: '440 LPH · Flat Pressure Curve', price: 489,
      ports: [{ id: 'out', label: 'Feed Out', side: 'left', dir: 'out', size: '8AN', thread: 'IN_TANK', kind: 'feed' }, { id: 'ret', label: 'Return In', side: 'bottom', dir: 'in', size: '6AN', thread: 'IN_TANK', kind: 'return' }, { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: { nominalLph: 440 } },
    { id: 'mod-x2-dw400', sku: '9-401-7030', category: 'pumps', role: 'pump', name: 'X2 Dual-DW400 Pump Module', subtitle: '830 LPH @ 40 PSI · 8ORB / 6ORB', price: 849,
      ports: [{ id: 'out', label: '8ORB Feed', side: 'left', dir: 'out', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'ret', label: '6ORB Return', side: 'bottom', dir: 'in', size: '6AN', thread: 'ORB', kind: 'return' }, { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: { nominalLph: 832 } },
    { id: 'mod-x3-dw400', sku: '9-401-7032', category: 'pumps', role: 'pump', name: 'X3 Triple-DW400 Pump Module', subtitle: '1,248 LPH @ 40 PSI · 10ORB / 8ORB', price: 1399,
      ports: [{ id: 'out', label: '10ORB Feed', side: 'left', dir: 'out', size: '10AN', thread: 'ORB', kind: 'feed' }, { id: 'ret', label: '8ORB Return', side: 'bottom', dir: 'in', size: '8AN', thread: 'ORB', kind: 'return' }, { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: { nominalLph: 1248 } },

    { id: 'st-30-dw420', sku: '6-421-30ST', category: 'surge', role: 'surge_pump', name: '3.0L Staged Surge Tank (Dual DW420)', subtitle: '840 LPH @ 40 PSI · 8ORB Feed', price: 729,
      ports: [{ id: 'in', label: '6ORB Lift', side: 'right', dir: 'in', size: '6AN', thread: 'ORB', kind: 'feed' }, { id: 'out', label: '8ORB Feed', side: 'left', dir: 'out', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'ret', label: '6ORB Ret', side: 'bottom', dir: 'in', size: '6AN', thread: 'ORB', kind: 'return' }, { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: { nominalLph: 840 } },
    { id: 'st-30-dw810', sku: '6-811-30ST', category: 'surge', role: 'surge_pump', name: '3.0L Staged Surge Tank (Dual DW810)', subtitle: '1,620 LPH Brushless · 10ORB Feed', price: 1549,
      ports: [{ id: 'in', label: '8ORB Lift', side: 'right', dir: 'in', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'out', label: '10ORB Feed', side: 'left', dir: 'out', size: '10AN', thread: 'ORB', kind: 'feed' }, { id: 'ret', label: '8ORB Ret', side: 'bottom', dir: 'in', size: '8AN', thread: 'ORB', kind: 'return' }, { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: { nominalLph: 1620 } },
    { id: 'st-55-dw400', sku: '6-401-55ST', category: 'surge', role: 'surge_pump', name: '5.5L Staged Surge Tank (Triple DW400)', subtitle: '1,248 LPH @ 40 PSI · 10ORB Feed', price: 1199,
      ports: [{ id: 'in', label: '8ORB Lift', side: 'right', dir: 'in', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'out', label: '10ORB Feed', side: 'left', dir: 'out', size: '10AN', thread: 'ORB', kind: 'feed' }, { id: 'ret', label: '8ORB Ret', side: 'bottom', dir: 'in', size: '8AN', thread: 'ORB', kind: 'return' }, { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: { nominalLph: 1248 } },

    { id: 'flt-110-10', sku: '8-03-110-010K', category: 'filters', role: 'filter', name: 'DWFF110 Inline Filter (10µm SS)', subtitle: '110mm Post-Pump · 8ORB In/Out', price: 122,
      ports: [{ id: 'in', label: '8ORB In', side: 'right', dir: 'in', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'out', label: '8ORB Out', side: 'left', dir: 'out', size: '8AN', thread: 'ORB', kind: 'feed' }], specs: { micron: 10 } },
    { id: 'flt-110-40', sku: '8-03-110-040K', category: 'filters', role: 'filter', name: 'DWFF110 Inline Filter (40µm SS)', subtitle: '110mm Post-Pump · 8ORB In/Out', price: 122,
      ports: [{ id: 'in', label: '8ORB In', side: 'right', dir: 'in', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'out', label: '8ORB Out', side: 'left', dir: 'out', size: '8AN', thread: 'ORB', kind: 'feed' }], specs: { micron: 40 } },
    { id: 'flt-160-10', sku: '8-03-160-010K', category: 'filters', role: 'filter', name: 'DWFF160 High-Flow Filter (10µm)', subtitle: '160mm High-HP · 10ORB In/Out', price: 174,
      ports: [{ id: 'in', label: '10ORB In', side: 'right', dir: 'in', size: '10AN', thread: 'ORB', kind: 'feed' }, { id: 'out', label: '10ORB Out', side: 'left', dir: 'out', size: '10AN', thread: 'ORB', kind: 'feed' }], specs: { micron: 10 } },

    { id: 'rail-coyote', sku: '7-301-OE', category: 'rails', role: 'rail', name: 'Billet Fuel Rails w/ Crossover', subtitle: 'High-Flow 8ORB Ports', price: 359,
      ports: [{ id: 'in', label: '8ORB In', side: 'right', dir: 'in', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'out', label: '8ORB Out', side: 'left', dir: 'out', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'inj', label: 'Injectors', side: 'bottom', dir: 'out', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }], specs: {} },
    { id: 'rail-single', sku: '7-300', category: 'rails', role: 'rail', name: 'Billet High-Flow Fuel Rail', subtitle: 'Matte Black · 8ORB In/Out', price: 259,
      ports: [{ id: 'in', label: '8ORB In', side: 'right', dir: 'in', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'out', label: '8ORB Out', side: 'left', dir: 'out', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'inj', label: 'Injectors', side: 'bottom', dir: 'out', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }], specs: {} },

    { id: 'inj-550', sku: '17U-00-0050-8', category: 'injectors', role: 'injector', name: 'DW 550cc Matched Injectors', subtitle: 'Bosch EV14 · IDS Flow Data', price: 649,
      baseSkus: { 4: '16U-00-0050-4', 6: '18U-00-0050-6', 8: '17U-00-0050-8' }, basePrices: { 4: 269, 6: 389, 8: 649 },
      ports: [{ id: 'in', label: 'Rail Feed', side: 'top', dir: 'in', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }], specs: { ccAt435: 550, deadTimeMs: 0.95 } },
    { id: 'inj-750', sku: '17U-00-0072-8', category: 'injectors', role: 'injector', name: 'DW 750cc Matched Injectors', subtitle: 'Bosch EV14 · IDS Flow Data', price: 719,
      baseSkus: { 4: '16U-00-0065-4', 6: '18U-00-0078-6', 8: '17U-00-0072-8' }, basePrices: { 4: 269, 6: 409, 8: 719 },
      ports: [{ id: 'in', label: 'Rail Feed', side: 'top', dir: 'in', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }], specs: { ccAt435: 750, deadTimeMs: 0.98 } },
    { id: 'inj-1000', sku: '17U-00-0095-8', category: 'injectors', role: 'injector', name: 'DW 1000cc Matched Injectors', subtitle: 'Bosch EV14 · E85 Ready', price: 719,
      baseSkus: { 4: '16U-00-0090-4', 6: '18U-00-0088-6', 8: '17U-00-0095-8' }, basePrices: { 4: 379, 6: 479, 8: 719 },
      ports: [{ id: 'in', label: 'Rail Feed', side: 'top', dir: 'in', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }], specs: { ccAt435: 1000, deadTimeMs: 1.02 } },
    { id: 'inj-1200', sku: '16MX-00-1200-8', category: 'injectors', role: 'injector', name: 'DW 1200cc Matched Injectors', subtitle: 'High-Boost E85 Favorite', price: 849,
      baseSkus: { 4: '16MX-00-1200-4', 6: '16MX-00-1200-6', 8: '16MX-00-1200-8' }, basePrices: { 4: 439, 6: 649, 8: 849 },
      ports: [{ id: 'in', label: 'Rail Feed', side: 'top', dir: 'in', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }], specs: { ccAt435: 1200, deadTimeMs: 1.05 } },
    { id: 'inj-1500', sku: '16M-00-1500-8', category: 'injectors', role: 'injector', name: 'DW 1500cc Matched Injectors', subtitle: 'Stainless Internals · E85/Meth', price: 1099,
      baseSkus: { 4: '16M-00-1500-4', 6: '16M-00-1500-6', 8: '16M-00-1500-8' }, basePrices: { 4: 559, 6: 829, 8: 1099 },
      ports: [{ id: 'in', label: 'Rail Feed', side: 'top', dir: 'in', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }], specs: { ccAt435: 1500, deadTimeMs: 1.08 } },
    { id: 'inj-2200', sku: '16S-00-2200-8', category: 'injectors', role: 'injector', name: 'DW 2200cc Matched Injectors', subtitle: 'Race Series · 1,400–2,000+ HP', price: 1299,
      baseSkus: { 4: '16S-00-2200-4', 6: '16S-00-2200-6', 8: '16S-00-2200-8' }, basePrices: { 4: 659, 6: 989, 8: 1299 },
      ports: [{ id: 'in', label: 'Rail Feed', side: 'top', dir: 'in', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }], specs: { ccAt435: 2200, deadTimeMs: 1.15 } },

    { id: 'reg-dwr1000c', sku: '6-1002-FRB', category: 'regulators', role: 'regulator', name: 'DWR1000c Compact Regulator', subtitle: '1:1 Boost Ref · 6ORB In/Ret', price: 139,
      ports: [{ id: 'in', label: '6ORB In', side: 'right', dir: 'in', size: '6AN', thread: 'ORB', kind: 'feed' }, { id: 'ret', label: '6ORB Ret', side: 'bottom', dir: 'out', size: '6AN', thread: 'ORB', kind: 'return' }, { id: 'gauge', label: '1/8 NPT', side: 'top', dir: 'out', size: '1/8NPT', thread: 'NPT', kind: 'gauge' }], specs: {} },
    { id: 'reg-dwr1000', sku: '6-1000-FRB', category: 'regulators', role: 'regulator', name: 'DWR1000 Adjustable Regulator', subtitle: '1:1 Boost Ref · 8ORB In / 6ORB Ret', price: 169,
      ports: [{ id: 'in', label: '8ORB In', side: 'right', dir: 'in', size: '8AN', thread: 'ORB', kind: 'feed' }, { id: 'ret', label: '6ORB Ret', side: 'bottom', dir: 'out', size: '6AN', thread: 'ORB', kind: 'return' }, { id: 'gauge', label: '1/8 NPT', side: 'top', dir: 'out', size: '1/8NPT', thread: 'NPT', kind: 'gauge' }], specs: {} },
    { id: 'reg-dwr2000', sku: '6-2000-FRB', category: 'regulators', role: 'regulator', name: 'DWR2000 High-Flow Regulator', subtitle: '1:1 Boost Ref · 10ORB In / 8ORB Ret', price: 169,
      ports: [{ id: 'in', label: '10ORB In', side: 'right', dir: 'in', size: '10AN', thread: 'ORB', kind: 'feed' }, { id: 'ret', label: '8ORB Ret', side: 'bottom', dir: 'out', size: '8AN', thread: 'ORB', kind: 'return' }, { id: 'gauge', label: '1/8 NPT', side: 'top', dir: 'out', size: '1/8NPT', thread: 'NPT', kind: 'gauge' }], specs: {} },
    { id: 'gauge-100', sku: '6-01-G', category: 'regulators', role: 'gauge', name: 'DW Fuel Pressure Gauge (0–100)', subtitle: '1/8 NPT Direct Mount · White Face', price: 29,
      ports: [{ id: 'in', label: '1/8 NPT', side: 'bottom', dir: 'in', size: '1/8NPT', thread: 'NPT', kind: 'gauge' }], specs: {} },
    { id: 'hwk-std', sku: 'FPHWK', category: 'wiring', role: 'wiring', name: 'Fuel Pump Hardwire Kit', subtitle: 'Universal Battery Relay Kit · Single Pump', price: 59,
      ports: [{ id: 'out', label: '12V Out', side: 'bottom', dir: 'out', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: {} },
    { id: 'hwk-hd', sku: 'FPHWK-10-HD', category: 'wiring', role: 'wiring', name: 'High-Current 10-Gauge Hardwire Kit', subtitle: 'Heavy-Duty Relay · DW400 / High-Amp', price: 79,
      ports: [{ id: 'out', label: '12V Out', side: 'bottom', dir: 'out', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: {} },
    { id: 'hwk-dp', sku: 'FPHWK-10-DP', category: 'wiring', role: 'wiring', name: 'Dual-Pump 10-Gauge Hardwire Kit', subtitle: 'Dual Relay Harness · X2 / Surge Tanks', price: 129,
      ports: [{ id: 'out', label: '12V Out', side: 'bottom', dir: 'out', size: '12V', thread: 'WIRING', kind: 'wiring' }], specs: {} },
    { id: 'bulkhead-8an', sku: '6-02-0709', category: 'plumbing', role: 'bulkhead', name: '8AN Firewall / Tank Bulkhead', subtitle: '8AN Male Flare Both Sides', price: 13,
      ports: [{ id: 'in', label: '8AN In', side: 'right', dir: 'in', size: '8AN', thread: 'AN_FLARE', kind: 'feed' }, { id: 'out', label: '8AN Out', side: 'left', dir: 'out', size: '8AN', thread: 'AN_FLARE', kind: 'feed' }], specs: {} }
  ];

  const TEMPLATES = {
    'street': {
      id: 'street', shortName: 'Street',
      defaultSpec: { power: 550, powerUnit: 'WHP', drivetrain: 'RWD', cylinders: 8, induction: 'Turbo', boostPsi: 12, basePsi: 58, fuel: 'Gasoline', systemType: 'Returnless' },
      material: 'PTFE', braid: 'Nylon', finish: 'Matte Black',
      nodes: [
        { uid: 'n6',  compId: 'gauge-100',   x: 24,   y: 24  },
        { uid: 'n5',  compId: 'reg-dwr1000', x: 24,   y: 210 },
        { uid: 'n3',  compId: 'rail-coyote', x: 376,  y: 160 },
        { uid: 'n4',  compId: 'inj-750',     x: 376,  y: 380 },
        { uid: 'n2',  compId: 'flt-110-10',  x: 728,  y: 210 },
        { uid: 'n1',  compId: 'pump-dw400',  x: 1080, y: 210 },
        { uid: 'nh1', compId: 'hwk-hd',      x: 1080, y: 24  }
      ],
      edges: [
        { id: 'e1',  from: 'n1',  fromPort: 'out',   to: 'n2', toPort: 'in',  kind: 'feed', size: '8AN', lengthFt: 10, startAngle: '90', endAngle: 'Straight' },
        { id: 'e2',  from: 'n2',  fromPort: 'out',   to: 'n3', toPort: 'in',  kind: 'feed', size: '8AN', lengthFt: 6,  startAngle: 'Straight', endAngle: '90' },
        { id: 'e3',  from: 'n3',  fromPort: 'out',   to: 'n5', toPort: 'in',  kind: 'feed', size: '8AN', lengthFt: 6,  startAngle: '90', endAngle: '90' },
        { id: 'e5',  from: 'n3',  fromPort: 'inj',   to: 'n4', toPort: 'in',  kind: 'injector' },
        { id: 'e6',  from: 'n5',  fromPort: 'gauge', to: 'n6', toPort: 'in',  kind: 'gauge' },
        { id: 'ew1', from: 'nh1', fromPort: 'out',   to: 'n1', toPort: 'pwr', kind: 'wiring' }
      ]
    },
    'high-hp': {
      id: 'high-hp', shortName: 'High-HP',
      defaultSpec: { power: 820, powerUnit: 'WHP', drivetrain: 'RWD', cylinders: 8, induction: 'Turbo', boostPsi: 18, basePsi: 43.5, fuel: 'E85', systemType: 'Return' },
      material: 'PTFE', braid: 'SS', finish: 'Matte Black',
      nodes: [
        { uid: 'n6',  compId: 'gauge-100',    x: 24,   y: 24  },
        { uid: 'n5',  compId: 'reg-dwr1000',  x: 24,   y: 210 },
        { uid: 'n3',  compId: 'rail-coyote',  x: 376,  y: 160 },
        { uid: 'n4',  compId: 'inj-1500',     x: 376,  y: 380 },
        { uid: 'n2',  compId: 'flt-110-10',   x: 728,  y: 210 },
        { uid: 'n1',  compId: 'mod-x2-dw400', x: 1080, y: 210 },
        { uid: 'nh1', compId: 'hwk-dp',       x: 1080, y: 24  }
      ],
      edges: [
        { id: 'e1',  from: 'n1',  fromPort: 'out',   to: 'n2', toPort: 'in',  kind: 'feed', size: '8AN', lengthFt: 10, startAngle: '90', endAngle: 'Straight' },
        { id: 'e2',  from: 'n2',  fromPort: 'out',   to: 'n3', toPort: 'in',  kind: 'feed', size: '8AN', lengthFt: 10, startAngle: 'Straight', endAngle: '45' },
        { id: 'e3',  from: 'n3',  fromPort: 'out',   to: 'n5', toPort: 'in',  kind: 'feed', size: '8AN', lengthFt: 6,  startAngle: '90', endAngle: '90' },
        { id: 'e4',  from: 'n5',  fromPort: 'ret',   to: 'n1', toPort: 'ret', kind: 'return', size: '6AN', lengthFt: 10, startAngle: '90', endAngle: 'Straight' },
        { id: 'e5',  from: 'n3',  fromPort: 'inj',   to: 'n4', toPort: 'in',  kind: 'injector' },
        { id: 'e6',  from: 'n5',  fromPort: 'gauge', to: 'n6', toPort: 'in',  kind: 'gauge' },
        { id: 'ew1', from: 'nh1', fromPort: 'out',   to: 'n1', toPort: 'pwr', kind: 'wiring' }
      ]
    },
    'race': {
      id: 'race', shortName: 'Race',
      defaultSpec: { power: 1300, powerUnit: 'WHP', drivetrain: 'RWD', cylinders: 8, induction: 'Turbo', boostPsi: 26, basePsi: 43.5, fuel: 'E85', systemType: 'Return' },
      material: 'PTFE', braid: 'Nylon', finish: 'Matte Black',
      nodes: [
        { uid: 'n6',  compId: 'gauge-100',   x: 24,   y: 24  },
        { uid: 'n5',  compId: 'reg-dwr2000', x: 24,   y: 210 },
        { uid: 'n3',  compId: 'rail-coyote', x: 368,  y: 160 },
        { uid: 'n4',  compId: 'inj-2200',    x: 368,  y: 380 },
        { uid: 'n2',  compId: 'flt-160-10',  x: 712,  y: 210 },
        { uid: 'n1',  compId: 'st-30-dw810', x: 1056, y: 210 },
        { uid: 'nh1', compId: 'hwk-dp',      x: 1056, y: 24  },
        { uid: 'n0',  compId: 'pump-dw300',  x: 1400, y: 210 },
        { uid: 'nh0', compId: 'hwk-std',     x: 1400, y: 24  }
      ],
      edges: [
        { id: 'e0',  from: 'n0',  fromPort: 'out',   to: 'n1', toPort: 'in',  kind: 'feed', size: '6AN',  lengthFt: 6,  startAngle: '90', endAngle: 'Straight' },
        { id: 'e1',  from: 'n1',  fromPort: 'out',   to: 'n2', toPort: 'in',  kind: 'feed', size: '10AN', lengthFt: 10, startAngle: 'Straight', endAngle: 'Straight' },
        { id: 'e2',  from: 'n2',  fromPort: 'out',   to: 'n3', toPort: 'in',  kind: 'feed', size: '10AN', lengthFt: 10, startAngle: 'Straight', endAngle: '45' },
        { id: 'e3',  from: 'n3',  fromPort: 'out',   to: 'n5', toPort: 'in',  kind: 'feed', size: '8AN',  lengthFt: 6,  startAngle: '90', endAngle: '90' },
        { id: 'e4',  from: 'n5',  fromPort: 'ret',   to: 'n1', toPort: 'ret', kind: 'return', size: '8AN', lengthFt: 10, startAngle: '90', endAngle: '90' },
        { id: 'e5',  from: 'n3',  fromPort: 'inj',   to: 'n4', toPort: 'in',  kind: 'injector' },
        { id: 'e6',  from: 'n5',  fromPort: 'gauge', to: 'n6', toPort: 'in',  kind: 'gauge' },
        { id: 'ew1', from: 'nh1', fromPort: 'out',   to: 'n1', toPort: 'pwr', kind: 'wiring' },
        { id: 'ew0', from: 'nh0', fromPort: 'out',   to: 'n0', toPort: 'pwr', kind: 'wiring' }
      ]
    },
    'blank': {
      id: 'blank', shortName: 'Blank',
      defaultSpec: { power: 700, powerUnit: 'WHP', drivetrain: 'RWD', cylinders: 8, induction: 'Turbo', boostPsi: 16, basePsi: 43.5, fuel: 'E85', systemType: 'Return' },
      material: 'PTFE', braid: 'SS', finish: 'Matte Black',
      nodes: [], edges: []
    }
  };

  // ---------- Pure Rules, Flow Math & BOM Engine ----------
  const DRIVETRAIN_MULT = { RWD: 1.15, FWD: 1.10, AWD: 1.20 };
  const BSFC_TABLE = {
    Gasoline: { NA: 0.50, Supercharged: 0.65, Turbo: 0.62 },
    E85:      { NA: 0.70, Supercharged: 0.88, Turbo: 0.85 },
    E98:      { NA: 0.80, Supercharged: 0.96, Turbo: 0.94 },
    Methanol: { NA: 1.05, Supercharged: 1.40, Turbo: 1.35 }
  };
  const LINE_MAX_LPH = { '6AN': 460, '8AN': 1050, '10AN': 2200 };

  const GARAGE_KEY = 'cm_variant-garage';
  const FITMENT_CSV_URL = 'https://cdn.shopify.com/s/files/1/0414/1681/8852/files/Applications.csv?v=1768578119';
  let fitmentRows = [];
  let fitmentPromise = null;
  let activeVehicle = null;
  let vehicleComps = [];
  const shopProductCache = {};

  function getAllComponents() { return vehicleComps.concat(COMPONENTS); }
  function getComp(id) { return vehicleComps.find(c => c.id === id) || COMPONENTS.find(c => c.id === id) || null; }

  function parseGarage(raw) {
    try {
      const sets = JSON.parse(raw || '[]');
      const arr = Array.isArray(sets) ? sets : [sets];
      for (let i = arr.length - 1; i >= 0; i--) {
        const trio = Array.isArray(arr[i]) ? arr[i] : [arr[i]];
        const m = {};
        trio.forEach(it => {
          if (it && it.field) m[it.field.toLowerCase()] = it.value != null ? it.value : (it.term != null ? it.term : String(it));
        });
        if (m.year && m.make && m.model) {
          return { year: String(m.year).trim(), make: String(m.make).trim(), model: String(m.model).trim() };
        }
      }
    } catch (_) {}
    return null;
  }

  function readGarage() {
    try {
      const raw = localStorage.getItem(GARAGE_KEY);
      return raw ? parseGarage(raw) : null;
    } catch (_) { return null; }
  }

  function saveGarage(ymm) {
    try {
      if (!ymm) { localStorage.removeItem(GARAGE_KEY); return; }
      const entry = [
        { field: 'year', value: String(ymm.year).trim() },
        { field: 'make', value: String(ymm.make).trim() },
        { field: 'model', value: String(ymm.model).trim() }
      ];
      localStorage.setItem(GARAGE_KEY, JSON.stringify([entry]));
    } catch (_) {}
  }

  function formatYMM(ymm) {
    if (!ymm) return '';
    const mLow = ymm.model.toLowerCase(), mkLow = ymm.make.toLowerCase();
    const s = mLow.startsWith(mkLow + ' ') ? (ymm.year + ' ' + ymm.model) : (ymm.year + ' ' + ymm.make + ' ' + ymm.model);
    return s.replace(/\s+/g, ' ').trim().toUpperCase();
  }

  function parseCsvLine(line) {
    const out = []; let cur = '', q = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') { if (q && line[i + 1] === '"') { cur += '"'; i++; } else q = !q; }
      else if (ch === ',' && !q) { out.push(cur.trim()); cur = ''; }
      else cur += ch;
    }
    out.push(cur.trim());
    return out;
  }

  function loadFitmentCsv() {
    if (fitmentPromise) return fitmentPromise;
    fitmentPromise = fetch(FITMENT_CSV_URL)
      .then(r => r.text())
      .then(text => {
        const lines = text.split(/\r?\n/).filter(l => l.trim());
        if (!lines.length) return [];
        const hdr = parseCsvLine(lines[0]).map(h => h.replace(/^\uFEFF/, ''));
        const iPt = hdr.indexOf('PartType'), iMk = hdr.indexOf('Make'), iMd = hdr.indexOf('Model'), iYf = hdr.indexOf('YearFrom'), iYt = hdr.indexOf('YearTo'), iPn = hdr.indexOf('PartNumber');
        const rows = [];
        for (let i = 1; i < lines.length; i++) {
          const c = parseCsvLine(lines[i]);
          if (c.length < 4) continue;
          const yf = parseInt(c[iYf], 10);
          const yt = iYt >= 0 ? parseInt(c[iYt], 10) : yf;
          const pn = (c[iPn] || '').trim();
          if (!pn || Number.isNaN(yf)) continue;
          rows.push({
            pt: (c[iPt] || '').trim(),
            make: (c[iMk] || '').trim(),
            model: (c[iMd] || '').trim(),
            yf,
            yt: (!Number.isNaN(yt) && yt >= yf) ? yt : yf,
            pn
          });
        }
        fitmentRows = rows;
        return rows;
      })
      .catch(() => []);
    return fitmentPromise;
  }

  function getFitmentYears() {
    const s = new Set();
    fitmentRows.forEach(r => { for (let y = r.yf; y <= r.yt; y++) s.add(y); });
    return Array.from(s).sort((a, b) => b - a);
  }

  function getFitmentMakes(year) {
    const y = parseInt(year, 10), s = new Set();
    if (Number.isNaN(y)) return [];
    fitmentRows.forEach(r => { if (y >= r.yf && y <= r.yt && r.make) s.add(r.make); });
    return Array.from(s).sort();
  }

  function getFitmentModels(year, make) {
    const y = parseInt(year, 10), mk = (make || '').toUpperCase().trim(), s = new Set();
    if (Number.isNaN(y) || !mk) return [];
    fitmentRows.forEach(r => { if (y >= r.yf && y <= r.yt && r.make.toUpperCase() === mk && r.model) s.add(r.model); });
    return Array.from(s).sort();
  }

  function matchFitmentRows(ymm) {
    const y = parseInt(ymm.year, 10), mk = ymm.make.toUpperCase().trim(), md = ymm.model.toUpperCase().trim();
    return fitmentRows.filter(r => {
      if (y < r.yf || y > r.yt) return false;
      if (r.make.toUpperCase() !== mk) return false;
      const rmd = r.model.toUpperCase();
      return rmd === md || rmd.includes(md) || md.includes(rmd);
    });
  }

  function classifyFitmentSku(sku, pt) {
    const s = sku.toUpperCase(), p = (pt || '').toLowerCase();
    if (/^(16|17|18|01|02|03|21|22|32)[A-Z0-9]*-/.test(s)) return 'injector';
    if (/^9-/.test(s)) return 'pump';
    if (/^7-/.test(s)) return 'rail';
    if (/^8-0[35]-/.test(s)) return 'filter';
    if (p === 'fuel injector') return 'injector';
    if (p.includes('fuel pump')) return 'pump';
    if (p.includes('fuel rail')) return 'rail';
    return null;
  }

  function extractCcFromText(text) {
    if (!text) return null;
    const m1 = text.match(/(\d{3,4}(?:\.\d+)?)\s*cc/i);
    if (m1) return Math.round(parseFloat(m1[1]));
    return null;
  }

  function inferPumpCurve(sku, title) {
    const s = (sku || '').toUpperCase(), t = (title || '').toUpperCase();
    if (s.startsWith('9-000-') || (t.includes('MODULE') && t.includes('NO PUMP'))) return { housingOnly: true, nominalLph: 0, curve: null };
    if (t.includes('X3') || s.includes('7032') || t.includes('TRIPLE')) return { housingOnly: false, nominalLph: 1248, curve: PUMP_CURVES['9-401-7032'], isModule: true };
    if (t.includes('X2') || s.includes('7030') || (t.includes('DUAL') && t.includes('400'))) return { housingOnly: false, nominalLph: 832, curve: PUMP_CURVES['9-401-7030'], isModule: true };
    if (s.includes('7002') || (t.includes('DUAL') && t.includes('300'))) return { housingOnly: false, nominalLph: 680, curve: PUMP_CURVES['9-301-7002'], isModule: true };
    if (s.startsWith('9-441') || t.includes('DW440')) return { housingOnly: false, nominalLph: 440, curve: PUMP_CURVES['9-441-C101-0900'] };
    if (s.startsWith('9-421') || t.includes('DW420')) return { housingOnly: false, nominalLph: 420, curve: PUMP_CURVES['9-421-1000'] };
    if (s.startsWith('9-401') || t.includes('DW400')) return { housingOnly: false, nominalLph: 415, curve: PUMP_CURVES['9-401-1001'] };
    if (s.startsWith('9-307') || s.startsWith('9-301') || t.includes('DW300')) return { housingOnly: false, nominalLph: 340, curve: PUMP_CURVES['9-301-1000'] };
    if (s.startsWith('9-651') || s.startsWith('9-652') || t.includes('DW65')) return { housingOnly: false, nominalLph: 265, curve: { 40: 265, 50: 245, 60: 225, 70: 205, 80: 185, 90: 165, 100: 145 } };
    if (s.startsWith('9-201') || t.includes('DW200')) return { housingOnly: false, nominalLph: 255, curve: PUMP_CURVES['9-201-1000'] };
    return { housingOnly: false, nominalLph: 340, curve: PUMP_CURVES['9-301-1000'] };
  }

  async function fetchShopProduct(sku) {
    const key = sku.toUpperCase();
    if (key in shopProductCache) return shopProductCache[key];
    const handle = sku.toLowerCase().replace(/\s+/g, '-');
    try {
      const ctrl = new AbortController();
      const tm = setTimeout(() => ctrl.abort(), 3800);
      const r = await fetch('/products/' + encodeURIComponent(handle) + '.js', { signal: ctrl.signal });
      clearTimeout(tm);
      if (r.ok) {
        const p = await r.json();
        const v = (p.variants || []).find(vr => vr.sku && vr.sku.trim().toUpperCase() === key) || (p.variants || [])[0];
        if (p && v) {
          const img = p.featured_image || (p.images && p.images[0] && (typeof p.images[0] === 'string' ? p.images[0] : p.images[0].src)) || '';
          const rec = { p: Math.round((v.price || 0) / 100), t: p.title || sku, h: p.handle || handle, i: img, v: v.id, sku: v.sku || sku };
          shopProductCache[key] = rec;
          LIVE_SKUS[key] = rec;
          return rec;
        }
      }
    } catch (_) {}
    shopProductCache[key] = null;
    return null;
  }

  function getDynComp(comp, spec) {
    if (comp.role === 'injector' && comp.baseSkus) {
      const cyl = spec.cylinders || 8;
      const sku = comp.baseSkus[cyl] || comp.sku;
      return {
        sku,
        price: livePrice(sku, comp.basePrices[cyl] || comp.price),
        name: comp.name + ' (Set of ' + cyl + ')',
        image: liveImage(sku),
        url: liveUrl(sku)
      };
    }
    return {
      sku: comp.sku,
      price: livePrice(comp.sku, comp.price),
      name: comp.name,
      image: liveImage(comp.sku),
      url: liveUrl(comp.sku)
    };
  }

  function interpolatePumpFlow(sku, psi) {
    const curve = PUMP_CURVES[sku];
    if (!curve) return null;
    const pts = Object.keys(curve).map(Number).sort((a, b) => a - b);
    const p = Math.max(pts[0], Math.min(pts[pts.length - 1], psi));
    for (let i = 0; i < pts.length - 1; i++) {
      if (p >= pts[i] && p <= pts[i + 1]) {
        const t = (p - pts[i]) / (pts[i + 1] - pts[i]);
        return Math.round(curve[pts[i]] + t * (curve[pts[i + 1]] - curve[pts[i]]));
      }
    }
    return curve[pts[0]];
  }

  function computeReq(spec) {
    const raw = Math.max(50, Number(spec.power) || 500);
    const crankHp = spec.powerUnit === 'WHP' ? Math.round(raw * (DRIVETRAIN_MULT[spec.drivetrain] || 1.15)) : Math.round(raw);
    const effectiveCrankHp = crankHp;
    const bsfc = (BSFC_TABLE[spec.fuel] && BSFC_TABLE[spec.fuel][spec.induction]) || 0.62;
    const boost = spec.induction === 'NA' ? 0 : Math.max(0, Number(spec.boostPsi) || 0);
    const basePsi = Math.max(30, Number(spec.basePsi) || 43.5);
    const operatingPsi = spec.systemType === 'Return' ? +(basePsi + boost).toFixed(1) : +basePsi.toFixed(1);
    const injectorDeltaPsi = spec.systemType === 'Return' ? basePsi : Math.max(25, basePsi - boost);
    const rawLph = effectiveCrankHp * bsfc * 0.6309;
    const reqPumpLph = Math.ceil(rawLph * 1.15);
    const cyl = Math.max(2, Number(spec.cylinders) || 8);
    const reqInjCcAt435 = Math.ceil((((effectiveCrankHp * bsfc) / cyl) * 10.5 / 0.90) * Math.sqrt(43.5 / injectorDeltaPsi));
    const recommendedFeedLine = reqPumpLph > 950 ? '10AN' : reqPumpLph > 420 ? '8AN' : '6AN';
    return { crankHp, effectiveCrankHp, bsfc, operatingPsi, injectorDeltaPsi, rawLph: Math.round(rawLph), reqPumpLph, reqInjCcAt435, recommendedFeedLine };
  }

  function buildAnalysis(st) {
    const req = computeReq(st.spec);
    const nodeEvals = {};
    const warnings = [];
    const bomMap = new Map();

    function addBom(sku, name, category, fallbackPrice, qty) {
      if (!bomMap.has(sku)) {
        bomMap.set(sku, {
          sku, name, category,
          price: livePrice(sku, fallbackPrice),
          image: liveImage(sku),
          url: liveUrl(sku),
          variantId: liveVariantId(sku),
          qty: 0
        });
      }
      bomMap.get(sku).qty += qty;
    }

    let primaryPumpFlow = 0;
    let bestInjEval = null;
    const hasSurge = st.nodes.some(n => { const c = getComp(n.compId); return c && c.role === 'surge_pump'; });
    let hasFilter = false, hasReg = false, hasGauge = false;

    st.nodes.forEach(node => {
      const comp = getComp(node.compId);
      if (!comp) return;
      const dyn = getDynComp(comp, st.spec);
      const cat = comp.role === 'pump' ? 'Fuel Pump / Module'
        : comp.role === 'surge_pump' ? 'Surge Tank System'
        : comp.role === 'injector' ? 'Fuel Injectors'
        : comp.role === 'rail' ? 'Fuel Rails'
        : comp.role === 'filter' ? 'Filtration'
        : comp.role === 'regulator' ? 'Pressure Control'
        : comp.role === 'gauge' ? 'Gauge'
        : comp.role === 'wiring' ? 'Wiring & Hardwire Kits' : 'Plumbing Hardware';
      addBom(dyn.sku, dyn.name, cat, dyn.price, 1);

      if (comp.role === 'filter') hasFilter = true;
      if (comp.role === 'regulator') hasReg = true;
      if (comp.role === 'gauge') hasGauge = true;

      if (comp.role === 'pump' || comp.role === 'surge_pump') {
        if (hasSurge && comp.role === 'pump') {
          const ratedLph = (comp.specs && comp.specs.nominalLph) || interpolatePumpFlow(comp.sku, 43.5);
          nodeEvals[node.uid] = { status: 'ok', flowAtOp: ratedLph, badge: 'Lift Pump · Rated ' + ratedLph + ' LPH @ 43.5 PSI' };
        } else {
          const flow = interpolatePumpFlow(comp.sku, req.operatingPsi);
          if (flow) {
            const pct = Math.round(((flow - req.rawLph) / req.rawLph) * 100);
            const status = flow < req.rawLph ? 'err' : pct < 15 ? 'warn' : 'ok';
            const badge = flow < req.rawLph
              ? flow + ' LPH @ ' + req.operatingPsi + ' PSI · Short ' + (req.rawLph - flow) + ' LPH'
              : flow + ' LPH @ ' + req.operatingPsi + ' PSI (' + (pct >= 0 ? '+' : '') + pct + '%)';
            nodeEvals[node.uid] = { status, flowAtOp: flow, headroomPct: pct, badge };
            primaryPumpFlow = Math.max(primaryPumpFlow, flow);
            if (status === 'err') warnings.push({ level: 'err', targetId: node.uid, text: comp.name + ' flows ' + flow + ' LPH at ' + req.operatingPsi + ' PSI — below ' + req.rawLph + ' LPH demand.' });
            else if (status === 'warn') warnings.push({ level: 'warn', targetId: node.uid, text: comp.name + ' has tight headroom (+' + pct + '%) at ' + req.operatingPsi + ' PSI.' });
          }
        }
      }

      if (comp.role === 'injector') {
        const actualCc = comp.specs.ccAt435 * Math.sqrt(req.injectorDeltaPsi / 43.5);
        const cyl = Math.max(2, Number(st.spec.cylinders) || 8);
        const needed = ((req.effectiveCrankHp * req.bsfc) / cyl) * 10.5;
        const deadPct = ((comp.specs.deadTimeMs || 1.0) / (120000 / 7000)) * 100;
        const dc = Math.min(140, Math.round((needed / actualCc) * 100 + deadPct));
        const status = dc > 90 ? 'err' : 'ok';
        const badge = dc > 90 ? dc + '% IDC — Exceeds 90% Max' : dc + '% IDC @ ' + req.effectiveCrankHp + ' HP';
        nodeEvals[node.uid] = { status, dutyCycle: dc, actualFlowCc: Math.round(actualCc), badge };
        bestInjEval = nodeEvals[node.uid];
        if (status === 'err') warnings.push({ level: 'err', targetId: node.uid, text: comp.name + ' hits ' + dc + '% duty cycle (max 90%). Recommend >= ' + req.reqInjCcAt435 + 'cc.' });
      }
    });

    const feetByHoseKey = {};
    st.edges.forEach(edge => {
      if (edge.kind === 'injector' || edge.kind === 'gauge' || edge.kind === 'wiring') return;
      const fn = st.nodes.find(n => n.uid === edge.from);
      const tn = st.nodes.find(n => n.uid === edge.to);
      if (!fn || !tn) return;
      const fc = getComp(fn.compId), tc = getComp(tn.compId);
      if (!fc || !tc) return;
      const fp = fc.ports.find(p => p.id === edge.fromPort);
      const tp = tc.ports.find(p => p.id === edge.toPort);
      const sz = edge.size || '8AN';
      const lineMat = edge.material || st.material || 'PTFE';
      const lineBraid = edge.braid || st.braid || 'SS';
      const hKey = lineMat + '|' + sz + '|' + lineBraid;
      feetByHoseKey[hKey] = (feetByHoseKey[hKey] || 0) + (Number(edge.lengthFt) || 10);

      if (edge.kind === 'feed' && tc.role !== 'surge_pump' && req.reqPumpLph > LINE_MAX_LPH[sz]) {
        warnings.push({ level: 'warn', targetId: edge.id, text: sz + ' feed line may restrict flow at ' + req.reqPumpLph + ' LPH. Consider ' + req.recommendedFeedLine + '.' });
      }

      [fp, tp].forEach((port, idx) => {
        if (!port) return;
        if (port.thread === 'ORB') {
          const adp = ADAPTERS[port.size.replace('AN', 'ORB') + '->' + sz];
          if (adp) {
            const sku = adp.base + '-B';
            addBom(sku, adp.name + ' (Matte Black)', 'Adapters (ORB → AN)', adp.price, 1);
          } else {
            warnings.push({ level: 'err', targetId: edge.id, text: 'No direct adapter from ' + port.size + ' ORB to ' + sz + ' hose.' });
          }
        } else if (port.thread === 'AN_FLARE' && port.size !== sz) {
          warnings.push({ level: 'warn', targetId: edge.id, text: port.size + ' flare port connected to ' + sz + ' hose (reducer needed).' });
        }

        const ang = idx === 0 ? (edge.startAngle || 'Straight') : (edge.endAngle || 'Straight');
        const end = HOSE_ENDS[lineMat + '|' + sz + '|' + ang] || HOSE_ENDS[lineMat + '|' + sz + '|Straight'];
        if (end) {
          const sku = end.base + '-B';
          addBom(sku, end.name + ' · Matte Black', 'Hose Ends (' + lineMat + ')', end.price, 1);
        }
      });
    });

    Object.keys(feetByHoseKey).forEach(hKey => {
      const hose = HOSE_MATRIX[hKey];
      if (!hose) return;
      const lineMat = hKey.split('|')[0];
      let rem = Math.max(6, Math.ceil(feetByHoseKey[hKey]));
      while (rem > 0) {
        const len = rem >= 16 ? 20 : rem >= 7 ? 10 : 6;
        const sku = hose.base + '-' + len;
        addBom(sku, hose.label + ', ' + len + ' ft', 'Fuel Hose (' + lineMat + ')', hose.prices[len], 1);
        rem -= len;
      }
    });

    if (st.nodes.length > 0 && !hasFilter) warnings.push({ level: 'warn', targetId: null, text: 'Add a post-pump 10µm filter (DWFF110 / DWFF160) to protect injectors.' });
    if (st.nodes.length > 0 && !hasReg) warnings.push({ level: 'warn', targetId: null, text: 'Add a DeatschWerks adjustable fuel pressure regulator (DWR1000 / DWR2000) to control fuel pressure.' });
    if (st.nodes.length > 0 && !hasGauge) warnings.push({ level: 'info', targetId: null, text: 'Add a DW Fuel Pressure Gauge (6-01-G) to monitor base & operating fuel pressure.' });
    if (st.spec.fuel !== 'Gasoline' && st.material === 'CPE' && st.nodes.length > 0) warnings.push({ level: 'info', targetId: null, text: 'Running ' + st.spec.fuel + ' — switch Hose to PTFE in 1 click for zero vapor permeation.' });

    const errCount = warnings.filter(w => w.level === 'err').length;
    const warnCount = warnings.filter(w => w.level === 'warn').length;
    return {
      req, nodeEvals, warnings, bomItems: Array.from(bomMap.values()),
      summary: { primaryPumpFlow, bestInjEval, errCount, warnCount, status: errCount ? 'err' : warnCount ? 'warn' : 'ok' }
    };
  }

  function renderMiniPumpCurveSvg(sku, operatingPsi, reqLph) {
    const curve = PUMP_CURVES[sku];
    if (!curve) return '';
    const pts = [40, 50, 60, 70, 80, 90, 100];
    const maxVal = Math.max(curve[40], reqLph || 0) * 1.12;
    const W = 170, H = 56, pad = 6;
    const xOf = p => pad + ((p - 40) / 60) * (W - pad * 2);
    const yOf = v => H - pad - (v / maxVal) * (H - pad * 2);
    const poly = pts.map(p => xOf(p).toFixed(1) + ',' + yOf(curve[p]).toFixed(1)).join(' ');
    const opP = Math.max(40, Math.min(100, operatingPsi));
    const opF = interpolatePumpFlow(sku, opP);
    const ox = xOf(opP).toFixed(1), oy = yOf(opF).toFixed(1);
    const ry = yOf(reqLph).toFixed(1);
    return '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" aria-label="Pump Flow Curve">'
      + '<line x1="' + pad + '" y1="' + ry + '" x2="' + (W - pad) + '" y2="' + ry + '" stroke="#94a3b8" stroke-dasharray="3 2" stroke-width="1" />'
      + '<polyline fill="none" stroke="#041a35" stroke-width="2.2" points="' + poly + '" />'
      + '<circle cx="' + ox + '" cy="' + oy + '" r="4.5" fill="#ff5a00" stroke="#ffffff" stroke-width="1.5" />'
      + '</svg>';
  }

  // ---------- Controller & State ----------
  const STORAGE_KEY = 'dw_fsb_shopify_v5';
  const SNAP = 20;
  const $ = id => document.getElementById(id);
  const LEGACY_TPL = { 'x2-return-coyote': 'high-hp', 'street-returnless': 'street', 'race-surge-e85': 'race', 'silvia-6-624': 'high-hp' };
  let state = null, past = [], future = [], selected = null, connecting = null, connectMode = false;
  let lineDraft = { size: '8AN', material: null, braid: null, lengthFt: 10, startAngle: 'Straight', endAngle: '90' };
  let mousePos = { x: 0, y: 0 }, activeCat = 'all', searchQuery = '';
  let panX = 24, panY = 24, zoom = 1, spaceHeld = false, isPanning = false, stageHover = false;
  let draggingCompId = null, dropTargetEdgeId = null;

  function canInsertOnEdge(comp) {
    if (!comp || !comp.ports) return null;
    const inPort = comp.ports.find(p => p.kind === 'feed' && p.dir === 'in');
    const outPort = comp.ports.find(p => p.kind === 'feed' && p.dir === 'out');
    return (inPort && outPort) ? { inPort, outPort } : null;
  }

  function distToSegment(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1;
    const lenSq = dx * dx + dy * dy;
    if (lenSq < 1) return Math.hypot(px - x1, py - y1);
    const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lenSq));
    return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
  }

  function findEdgeNearPoint(sx, sy, excludeUid) {
    let bestId = null, bestDist = 48;
    state.edges.forEach(edge => {
      if (edge.kind !== 'feed' && edge.kind !== 'return') return;
      if (excludeUid && (edge.from === excludeUid || edge.to === excludeUid)) return;
      const fn = state.nodes.find(n => n.uid === edge.from), tn = state.nodes.find(n => n.uid === edge.to);
      if (!fn || !tn) return;
      const fc = getComp(fn.compId), tc = getComp(tn.compId);
      const fp = fc && fc.ports.find(p => p.id === edge.fromPort), tp = tc && tc.ports.find(p => p.id === edge.toPort);
      if (!fp || !tp) return;
      const p1 = getPortXY(fn, fp), p2 = getPortXY(tn, tp);
      let d = Infinity;
      if (edge.kind === 'return') {
        const g = edgeGeom(p1, p2, 'return');
        const ly = g.ly;
        d = Math.min(
          distToSegment(sx, sy, p1.x, p1.y, p1.x, ly),
          distToSegment(sx, sy, p1.x, ly, p2.x, ly),
          distToSegment(sx, sy, p2.x, ly, p2.x, p2.y)
        );
      } else {
        const dx = Math.max(46, Math.abs(p2.x - p1.x) * 0.45);
        const c1 = p1.x + (p2.x >= p1.x ? dx : -dx), c2 = p2.x - (p2.x >= p1.x ? dx : -dx);
        let prevX = p1.x, prevY = p1.y;
        for (let i = 1; i <= 12; i++) {
          const t = i / 12, mt = 1 - t;
          const bx = mt*mt*mt*p1.x + 3*mt*mt*t*c1 + 3*mt*t*t*c2 + t*t*t*p2.x;
          const by = mt*mt*mt*p1.y + 3*mt*mt*t*p1.y + 3*mt*t*t*p2.y + t*t*t*p2.y;
          const segD = distToSegment(sx, sy, prevX, prevY, bx, by);
          if (segD < d) d = segD;
          prevX = bx; prevY = by;
        }
      }
      if (d < bestDist) { bestDist = d; bestId = edge.id; }
    });
    return bestId;
  }

  function insertNodeIntoEdge(nodeUid, comp, edgeId) {
    const ports = canInsertOnEdge(comp);
    const edge = state.edges.find(e => e.id === edgeId);
    if (!ports || !edge) return false;
    const splitLen = Number(edge.lengthFt) >= 16 ? 10 : 6;
    const base = { kind: edge.kind, size: edge.size || '8AN', lengthFt: splitLen };
    if (edge.material) base.material = edge.material;
    if (edge.braid) base.braid = edge.braid;
    const eA = Object.assign({ id: 'e' + Date.now().toString(36) + 'a', from: edge.from, fromPort: edge.fromPort, to: nodeUid, toPort: ports.inPort.id, startAngle: edge.startAngle || 'Straight', endAngle: 'Straight' }, base);
    const eB = Object.assign({ id: 'e' + Date.now().toString(36) + 'b', from: nodeUid, fromPort: ports.outPort.id, to: edge.to, toPort: edge.toPort, startAngle: 'Straight', endAngle: edge.endAngle || 'Straight' }, base);
    state.edges = state.edges.filter(e => e.id !== edge.id);
    state.edges.push(eA, eB);
    return true;
  }

  function autoAlignCanvas() {
    if (!state.nodes.length) return;
    pushHist();
    const regs = [], gauges = [], rails = [], injs = [], mids = [], surges = [], pumps = [], wirings = [];
    state.nodes.forEach(n => {
      const c = getComp(n.compId);
      if (!c) return;
      if (c.role === 'regulator') regs.push(n);
      else if (c.role === 'gauge') gauges.push(n);
      else if (c.role === 'rail') rails.push(n);
      else if (c.role === 'injector') injs.push(n);
      else if (c.role === 'surge_pump') surges.push(n);
      else if (c.role === 'pump') pumps.push(n);
      else if (c.role === 'wiring') wirings.push(n);
      else mids.push(n);
    });
    mids.sort((a, b) => a.x - b.x);
    let colX = 24;
    const STRIDE = 352;
    if (regs.length || gauges.length) {
      regs.forEach((n, i) => { n.x = colX; n.y = 210 + i * 170; });
      gauges.forEach((n, i) => { n.x = colX + i * 280; n.y = 24; });
      colX += STRIDE;
    }
    if (rails.length || injs.length) {
      rails.forEach((n, i) => { n.x = colX; n.y = 160 + i * 170; });
      injs.forEach((n, i) => { n.x = colX; n.y = 380 + i * 170; });
      colX += STRIDE;
    }
    mids.forEach(n => { n.x = colX; n.y = 210; colX += STRIDE; });
    surges.forEach(n => { n.x = colX; n.y = 210; colX += STRIDE; });
    pumps.forEach(n => { n.x = colX; n.y = 210; colX += STRIDE; });
    wirings.forEach((n, idx) => {
      const wEdge = state.edges.find(e => e.kind === 'wiring' && (e.from === n.uid || e.to === n.uid));
      const targetUid = wEdge ? (wEdge.from === n.uid ? wEdge.to : wEdge.from) : null;
      const targetNode = targetUid ? state.nodes.find(tn => tn.uid === targetUid) : null;
      if (targetNode) { n.x = targetNode.x; n.y = 24; }
      else { n.x = Math.max(24, colX - STRIDE) + idx * 280; n.y = 24; }
    });
    renderAll();
    requestAnimationFrame(fitCanvasToNodes);
    toast('Diagram aligned neatly');
  }

  function applyViewport() {
    const stage = $('fsbStage'), wrap = $('fsbStageWrap'), pct = $('fsbZoomPct');
    if (stage) stage.style.transform = 'translate(' + panX + 'px, ' + panY + 'px) scale(' + zoom + ')';
    if (wrap) {
      wrap.style.backgroundPosition = panX + 'px ' + panY + 'px';
      const gs = Math.max(10, Math.round(24 * zoom * 10) / 10);
      wrap.style.backgroundSize = gs + 'px ' + gs + 'px';
    }
    if (pct) pct.textContent = Math.round(zoom * 100) + '%';
  }

  function screenToStage(clientX, clientY) {
    const wrap = $('fsbStageWrap');
    const r = wrap.getBoundingClientRect();
    return { x: (clientX - r.left - panX) / zoom, y: (clientY - r.top - panY) / zoom };
  }

  function zoomAt(nextZoom, clientX, clientY) {
    const wrap = $('fsbStageWrap');
    if (!wrap) return;
    const clamped = Math.max(0.45, Math.min(1.5, Math.round(nextZoom * 100) / 100));
    const r = wrap.getBoundingClientRect();
    const cx = clientX != null ? clientX - r.left : r.width / 2;
    const cy = clientY != null ? clientY - r.top : r.height / 2;
    const sx = (cx - panX) / zoom;
    const sy = (cy - panY) / zoom;
    zoom = clamped;
    panX = Math.round(cx - sx * zoom);
    panY = Math.round(cy - sy * zoom);
    applyViewport();
  }

  function fitCanvasToNodes() {
    const wrap = $('fsbStageWrap');
    if (!wrap || !state || !state.nodes.length) { panX = 24; panY = 24; zoom = 1; applyViewport(); return; }
    const rw = wrap.clientWidth || 800, rh = wrap.clientHeight || 560;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    state.nodes.forEach(n => {
      const el = document.querySelector('.dw-fsb__node[data-uid="' + n.uid + '"]');
      const nh = el ? el.offsetHeight : 148;
      if (n.x < minX) minX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.x + 256 > maxX) maxX = n.x + 256;
      if (n.y + nh > maxY) maxY = n.y + nh;
    });
    const hasRet = state.edges.some(e => e.kind === 'return');
    if (hasRet) maxY += 68;
    const bw = Math.max(200, maxX - minX);
    const bh = Math.max(200, maxY - minY);
    const padX = 56, padY = 56;
    const fitScale = Math.min(1, (rw - padX * 2) / bw, (rh - padY * 2) / bh);
    zoom = Math.max(0.5, Math.round(fitScale * 100) / 100);
    panX = Math.round((rw - bw * zoom) / 2 - minX * zoom);
    panY = Math.round((rh - bh * zoom) / 2 - minY * zoom);
    applyViewport();
  }

  const clone = o => JSON.parse(JSON.stringify(o));
  function toast(msg) {
    const el = $('fsbToast');
    el.textContent = msg;
    el.classList.add('is-show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('is-show'), 2600);
  }

  function fromTemplate(id) {
    const mapped = LEGACY_TPL[id] || id;
    const t = TEMPLATES[mapped] || TEMPLATES['street'];
    return {
      templateId: t.id, spec: clone(t.defaultSpec),
      material: t.material, braid: t.braid, finish: t.finish,
      nodes: clone(t.nodes), edges: clone(t.edges),
      excluded: {}, qtyOverrides: {}
    };
  }

  function applySystemTypeToCanvas(sysType) {
    if (!state.nodes.length) return;
    if (sysType === 'Returnless') {
      state.edges = state.edges.filter(e => e.kind !== 'return');
      toast('Switched to Returnless — kept regulator & gauge, removed return line');
      return;
    }
    // Switching to Return (1:1): ensure regulator, gauge & return line are present
    const req = computeReq(state.spec);
    const hasSurge = state.nodes.some(n => { const c = getComp(n.compId); return c && c.role === 'surge_pump'; });
    const highFlow = hasSurge || req.reqPumpLph > 900;
    let regNode = state.nodes.find(n => { const c = getComp(n.compId); return c && c.role === 'regulator'; });
    if (!regNode) {
      let minX = Infinity;
      state.nodes.forEach(n => { if (n.x < minX) minX = n.x; });
      if (minX < 340) {
        const shift = 376 - minX;
        state.nodes.forEach(n => { n.x = Math.round((n.x + shift) / SNAP) * SNAP; });
      }
      const regUid = 'nreg' + Date.now().toString(36).slice(-4);
      const gaugeUid = 'ngau' + Date.now().toString(36).slice(-4);
      regNode = { uid: regUid, compId: highFlow ? 'reg-dwr2000' : 'reg-dwr1000', x: 24, y: 210 };
      state.nodes.unshift(regNode);
      state.nodes.unshift({ uid: gaugeUid, compId: 'gauge-100', x: 24, y: 24 });
      state.edges.push({ id: 'eg' + Date.now().toString(36), from: regUid, fromPort: 'gauge', to: gaugeUid, toPort: 'in', kind: 'gauge' });
      const railNode = state.nodes.find(n => { const c = getComp(n.compId); return c && c.role === 'rail'; });
      if (railNode) {
        state.edges.push({ id: 'er' + Date.now().toString(36), from: railNode.uid, fromPort: 'out', to: regUid, toPort: 'in', kind: 'feed', size: '8AN', lengthFt: 6, startAngle: '90', endAngle: '90' });
      }
    }
    const hasReturnEdge = state.edges.some(e => e.kind === 'return');
    if (!hasReturnEdge) {
      const retTarget = state.nodes.find(n => { const c = getComp(n.compId); return c && c.role === 'surge_pump'; })
        || state.nodes.find(n => { const c = getComp(n.compId); return c && c.role === 'pump' && c.ports.some(p => p.id === 'ret'); });
      if (retTarget) {
        state.edges.push({ id: 'eret' + Date.now().toString(36), from: regNode.uid, fromPort: 'ret', to: retTarget.uid, toPort: 'ret', kind: 'return', size: highFlow ? '8AN' : '6AN', lengthFt: 10, startAngle: '90', endAngle: 'Straight' });
      }
    }
    toast('Switched to Return (1:1) — added return line');
  }

  function pushHist() {
    past.push(clone(state));
    if (past.length > 20) past.shift();
    future = [];
  }

  function loadInitialState() {
    if (location.hash && location.hash.startsWith('#build=')) {
      try {
        const d = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(location.hash.slice(7))))));
        return { templateId: d.t || 'x2-return-coyote', spec: d.s, material: d.m || 'PTFE', braid: d.b || 'SS', finish: 'Matte Black', nodes: d.n || [], edges: d.e || [], excluded: d.x || {}, qtyOverrides: d.q || {} };
      } catch (_) {}
    }
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) {
        const parsed = JSON.parse(s);
        if (parsed && Array.isArray(parsed.nodes)) {
          parsed.nodes.forEach(n => {
            if (n.compId && n.compId.startsWith('veh-')) {
              n.compId = n.compId.includes('7-') ? 'rail-coyote' : n.compId.includes('9-') ? 'pump-dw400' : 'inj-750';
            }
          });
        }
        return parsed;
      }
    } catch (_) {}
    return fromTemplate(root.dataset.defaultTemplate || 'x2-return-coyote');
  }

  function getPortXY(node, port) {
    const el = document.querySelector('.dw-fsb__node[data-uid="' + node.uid + '"]');
    const w = 256, h = el ? el.offsetHeight : 134;
    if (port.side === 'left') return { x: node.x, y: node.y + h / 2 };
    if (port.side === 'right') return { x: node.x + w, y: node.y + h / 2 };
    if (port.side === 'top') return { x: node.x + w / 2, y: node.y };
    if (port.side === 'bottom') return { x: node.x + w / 2, y: node.y + h };
    return { x: node.x + w / 2, y: node.y + h / 2 };
  }

  function edgeGeom(p1, p2, kind) {
    if (kind === 'return') {
      const minX = Math.min(p1.x, p2.x), maxX = Math.max(p1.x, p2.x);
      let clearY = Math.max(p1.y, p2.y);
      state.nodes.forEach(n => {
        if (n.x + 256 > minX && n.x < maxX) {
          const el = document.querySelector('.dw-fsb__node[data-uid="' + n.uid + '"]');
          const bot = n.y + (el ? el.offsetHeight : 156);
          if (bot > clearY) clearY = bot;
        }
      });
      const lowY = clearY + 46;
      return { d: 'M ' + p1.x + ' ' + p1.y + ' L ' + p1.x + ' ' + lowY + ' L ' + p2.x + ' ' + lowY + ' L ' + p2.x + ' ' + p2.y, lx: (p1.x + p2.x) / 2, ly: lowY };
    }
    if (Math.abs(p1.x - p2.x) < 40) {
      return { d: 'M ' + p1.x + ' ' + p1.y + ' L ' + p2.x + ' ' + p2.y, lx: (p1.x + p2.x) / 2, ly: (p1.y + p2.y) / 2 };
    }
    const dx = Math.max(46, Math.abs(p2.x - p1.x) * 0.45);
    const c1 = p1.x + (p2.x >= p1.x ? dx : -dx), c2 = p2.x - (p2.x >= p1.x ? dx : -dx);
    return { d: 'M ' + p1.x + ' ' + p1.y + ' C ' + c1 + ' ' + p1.y + ', ' + c2 + ' ' + p2.y + ', ' + p2.x + ' ' + p2.y, lx: (p1.x + p2.x) / 2, ly: (p1.y + p2.y) / 2 };
  }

  function renderTemplatePills() {
    const wrap = $('fsbTemplatePills');
    wrap.innerHTML = '';
    Object.values(TEMPLATES).forEach(t => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'dw-fsb__tpl-pill' + (state.templateId === t.id ? ' is-active' : '');
      b.textContent = t.shortName;
      b.addEventListener('click', () => {
        pushHist();
        const prevCyl = activeVehicle ? state.spec.cylinders : null;
        state = fromTemplate(t.id);
        if (prevCyl) state.spec.cylinders = prevCyl;
        selected = null; connecting = null; connectMode = false;
        if (activeVehicle && state.nodes.length && typeof window.__dwFsbAutoSize === 'function') window.__dwFsbAutoSize();
        renderAll();
        requestAnimationFrame(fitCanvasToNodes);
        toast('Loaded ' + t.shortName);
      });
      wrap.appendChild(b);
    });
  }

  function syncControls() {
    if (document.activeElement !== $('fsbPower')) $('fsbPower').value = state.spec.power;
    $('fsbPowerUnit').value = state.spec.powerUnit;
    $('fsbDrive').value = state.spec.drivetrain;
    $('fsbDriveWrap').style.display = state.spec.powerUnit === 'WHP' ? 'inline-flex' : 'none';
    $('fsbCyl').value = String(state.spec.cylinders);
    $('fsbInd').value = state.spec.induction;
    if (document.activeElement !== $('fsbBoost')) $('fsbBoost').value = state.spec.boostPsi;
    $('fsbBoostWrap').style.display = state.spec.induction === 'NA' ? 'none' : 'inline-flex';
    if (document.activeElement !== $('fsbBasePsi')) $('fsbBasePsi').value = state.spec.basePsi;
    $('fsbFuel').value = state.spec.fuel;
    $('fsbSysType').value = state.spec.systemType;

    root.querySelectorAll('#fsbMatToggle .dw-fsb__seg-btn').forEach(b => b.classList.toggle('is-active', b.dataset.val === state.material));
    root.querySelectorAll('#fsbBraidToggle .dw-fsb__seg-btn').forEach(b => b.classList.toggle('is-active', b.dataset.val === state.braid));
  }

  function renderPalette() {
    const q = searchQuery.trim().toLowerCase();
    const all = getAllComponents();
    let list = all.filter(c => {
      const catOk = activeCat === 'all' ? true : activeCat === 'fit' ? !!c.vehicleFit : c.category === activeCat;
      const qOk = !q || c.name.toLowerCase().includes(q) || c.sku.toLowerCase().includes(q) || (c.subtitle || '').toLowerCase().includes(q);
      return catOk && qOk;
    });
    if (!list.length && q && activeCat !== 'all') {
      const wide = all.filter(c => c.name.toLowerCase().includes(q) || c.sku.toLowerCase().includes(q) || (c.subtitle || '').toLowerCase().includes(q));
      if (wide.length) {
        activeCat = 'all';
        root.querySelectorAll('#fsbChips .dw-fsb__chip').forEach(ch => ch.classList.toggle('is-active', ch.dataset.cat === 'all'));
        list = wide;
      }
    }
    const el = $('fsbPaletteList');
    el.innerHTML = '';
    list.forEach(c => {
      const dyn = getDynComp(c, state.spec);
      const card = document.createElement('div');
      card.className = 'dw-fsb__pcard';
      card.draggable = true;
      card.innerHTML = '<img class="dw-fsb__thumb" src="' + dyn.image + '" alt="" loading="lazy" />'
        + '<div style="min-width:0">'
        + (c.vehicleFit ? '<div class="dw-fsb__fit-pill">Fits Your Vehicle</div>' : '')
        + '<div class="dw-fsb__pcard-title">' + c.name + '</div>'
        + '<div class="dw-fsb__pcard-sub">' + c.subtitle + '</div>'
        + '<div class="dw-fsb__pcard-sku dw-fsb__num">' + dyn.sku + '</div>'
        + '<div class="dw-fsb__pcard-foot">'
        + '<span class="dw-fsb__pcard-price">$' + dyn.price + '</span>'
        + '<button type="button" class="dw-fsb__add-btn">+ Add</button></div></div>';
      card.addEventListener('dragstart', ev => { draggingCompId = c.id; ev.dataTransfer.setData('text/plain', c.id); });
      card.addEventListener('dragend', () => { draggingCompId = null; if (dropTargetEdgeId) { dropTargetEdgeId = null; renderEdges(); } });
      card.querySelector('.dw-fsb__add-btn').addEventListener('click', ev => { ev.stopPropagation(); addNode(c.id); });
      el.appendChild(card);
    });
  }

  function addNode(compId, x, y) {
    pushHist();
    const uid = 'n' + Date.now().toString(36) + Math.floor(Math.random() * 99);
    state.nodes.push({
      uid, compId,
      x: typeof x === 'number' ? Math.max(20, Math.round(x / SNAP) * SNAP) : 60 + ((state.nodes.length * 70) % 640),
      y: typeof y === 'number' ? Math.max(20, Math.round(y / SNAP) * SNAP) : 60 + ((state.nodes.length * 40) % 280)
    });
    selected = { type: 'node', id: uid };
    renderAll();
    toast('Added to blueprint');
  }

  function renderCanvas(analysis) {
    const layer = $('fsbNodes');
    layer.innerHTML = '';
    state.nodes.forEach(node => {
      const comp = getComp(node.compId);
      if (!comp) return;
      const dyn = getDynComp(comp, state.spec);
      const ev = analysis.nodeEvals[node.uid];
      const isSel = selected && selected.type === 'node' && selected.id === node.uid;

      const el = document.createElement('div');
      el.className = 'dw-fsb__node' + (isSel ? ' is-selected' : '') + (ev && ev.status === 'err' ? ' is-error' : ev && ev.status === 'warn' ? ' is-warn' : '');
      el.dataset.uid = node.uid;
      el.style.left = node.x + 'px';
      el.style.top = node.y + 'px';

      const roleLbl = comp.role === 'surge_pump' ? 'Surge Tank' : comp.role === 'wiring' ? 'Hardwire Kit' : comp.role.toUpperCase();
      el.innerHTML = '<div class="dw-fsb__node-head"><span><span class="dw-fsb__node-role">' + roleLbl + '</span>' + (comp.vehicleFit ? '<span class="dw-fsb__node-fit">Direct Fit</span>' : '') + '</span><button type="button" class="dw-fsb__node-del" title="Remove">×</button></div>'
        + '<div class="dw-fsb__node-body"><div class="dw-fsb__node-main">'
        + '<img class="dw-fsb__node-thumb" src="' + dyn.image + '" alt="" />'
        + '<div style="min-width:0"><div class="dw-fsb__node-title">' + comp.name + '</div>'
        + '<div class="dw-fsb__node-meta"><span class="dw-fsb__num">' + dyn.sku + '</span><span class="dw-fsb__num" style="font-weight:800;color:var(--fsb-navy)">$' + dyn.price + '</span></div></div></div>'
        + (ev ? '<div class="dw-fsb__node-badge dw-fsb__node-badge--' + ev.status + ' dw-fsb__num">' + ev.badge + '</div>' : '')
        + '</div>';

      comp.ports.forEach(port => {
        const dot = document.createElement('button');
        dot.type = 'button';
        const isSource = connecting && connecting.uid === node.uid && connecting.portId === port.id;
        const isTargetable = (connectMode && !connecting) || (connecting && connecting.uid !== node.uid);
        dot.className = 'dw-fsb__port dw-fsb__port--' + port.side
          + (port.kind === 'return' ? ' dw-fsb__port--return' : port.kind === 'wiring' ? ' dw-fsb__port--wiring' : '')
          + (isSource ? ' is-connecting' : '')
          + (isTargetable ? ' is-targetable' : '');
        dot.dataset.uid = node.uid;
        dot.dataset.portId = port.id;
        dot.innerHTML = '<span>+</span><span class="dw-fsb__port-tag">' + port.label + '</span>';
        dot.title = port.label + ' (' + port.size + ' ' + port.thread + ') — Drag or click to connect a fuel line';
        dot.addEventListener('mousedown', e => {
          if (spaceHeld || e.button === 1) return;
          e.stopPropagation();
          e.preventDefault();
          const startPos = screenToStage(e.clientX, e.clientY);
          mousePos = startPos;
          if (!connecting) {
            connecting = { uid: node.uid, portId: port.id, kind: port.kind, size: port.size };
            connectMode = true;
            renderAll();
            let dragged = false;
            function onDragMove(mv) {
              if (!dragged && (Math.abs(mv.clientX - e.clientX) > 6 || Math.abs(mv.clientY - e.clientY) > 6)) dragged = true;
              mousePos = screenToStage(mv.clientX, mv.clientY);
              renderEdges();
            }
            function onDragUp(up) {
              window.removeEventListener('mousemove', onDragMove);
              window.removeEventListener('mouseup', onDragUp);
              if (!dragged) return;
              const target = document.elementFromPoint(up.clientX, up.clientY);
              const targetDot = target && target.closest ? target.closest('.dw-fsb__port') : null;
              if (targetDot && targetDot.dataset.uid && targetDot.dataset.uid !== node.uid) {
                const tn = state.nodes.find(n => n.uid === targetDot.dataset.uid);
                const tc = tn && getComp(tn.compId);
                const tp = tc && tc.ports.find(p => p.id === targetDot.dataset.portId);
                if (tn && tp) { handlePort(tn.uid, tp); return; }
              }
              const targetNodeEl = target && target.closest ? target.closest('.dw-fsb__node') : null;
              if (targetNodeEl && targetNodeEl.dataset.uid && targetNodeEl.dataset.uid !== node.uid) {
                const tn = state.nodes.find(n => n.uid === targetNodeEl.dataset.uid);
                const tc = tn && getComp(tn.compId);
                if (tn && tc && tc.ports.length) {
                  const wantDir = port.dir === 'out' ? 'in' : 'out';
                  const tp = tc.ports.find(p => p.kind === port.kind && p.dir === wantDir)
                    || tc.ports.find(p => p.dir === wantDir)
                    || tc.ports[0];
                  if (tp) { handlePort(tn.uid, tp); return; }
                }
              }
            }
            window.addEventListener('mousemove', onDragMove);
            window.addEventListener('mouseup', onDragUp);
          } else {
            handlePort(node.uid, port);
          }
        });
        el.appendChild(dot);
      });

      el.querySelector('.dw-fsb__node-del').addEventListener('click', e => {
        e.stopPropagation(); pushHist();
        state.nodes = state.nodes.filter(n => n.uid !== node.uid);
        state.edges = state.edges.filter(ed => ed.from !== node.uid && ed.to !== node.uid);
        if (selected && selected.id === node.uid) selected = null;
        renderAll();
      });

      el.addEventListener('mousedown', e => {
        if (spaceHeld || e.button === 1) return;
        if (e.target.closest('.dw-fsb__port') || e.target.closest('.dw-fsb__node-del')) return;
        e.stopPropagation();
        selected = { type: 'node', id: node.uid };
        const sx = e.clientX, sy = e.clientY, ox = node.x, oy = node.y;
        let moved = false;
        const hasAttachedEdge = state.edges.some(ed => ed.from === node.uid || ed.to === node.uid);
        const canSplit = !hasAttachedEdge && !!canInsertOnEdge(comp);
        function mm(mv) {
          const dx = (mv.clientX - sx) / zoom, dy = (mv.clientY - sy) / zoom;
          if (!moved && (Math.abs(mv.clientX - sx) > 4 || Math.abs(mv.clientY - sy) > 4)) { pushHist(); moved = true; }
          if (moved) {
            node.x = Math.max(10, Math.round((ox + dx) / SNAP) * SNAP);
            node.y = Math.max(10, Math.round((oy + dy) / SNAP) * SNAP);
            el.style.left = node.x + 'px'; el.style.top = node.y + 'px';
            if (canSplit) dropTargetEdgeId = findEdgeNearPoint(node.x + 128, node.y + 64, node.uid);
            renderEdges();
          }
        }
        function mu() {
          window.removeEventListener('mousemove', mm);
          window.removeEventListener('mouseup', mu);
          if (moved && canSplit && dropTargetEdgeId) {
            const targetId = dropTargetEdgeId;
            dropTargetEdgeId = null;
            if (insertNodeIntoEdge(node.uid, comp, targetId)) {
              toast('Inserted into fuel line — hose & fittings updated');
            }
          } else {
            dropTargetEdgeId = null;
          }
          renderAll();
        }
        window.addEventListener('mousemove', mm);
        window.addEventListener('mouseup', mu);
      });

      layer.appendChild(el);
    });
    const stg = $('fsbStage');
    if (stg) {
      let maxX = 1100, maxY = 480;
      state.nodes.forEach(n => { if (n.x > maxX) maxX = n.x; if (n.y > maxY) maxY = n.y; });
      stg.style.width = Math.max(1380, maxX + 300) + 'px';
      stg.style.height = Math.max(660, maxY + 260) + 'px';
    }
    renderEdges();
  }

  function renderEdges() {
    const svg = $('fsbSvg'), pills = $('fsbPills');
    svg.innerHTML = ''; pills.innerHTML = '';
    const ns = 'http://www.w3.org/2000/svg';

    state.edges.forEach(edge => {
      const fn = state.nodes.find(n => n.uid === edge.from), tn = state.nodes.find(n => n.uid === edge.to);
      if (!fn || !tn) return;
      const fc = getComp(fn.compId), tc = getComp(tn.compId);
      const fp = fc && fc.ports.find(p => p.id === edge.fromPort), tp = tc && tc.ports.find(p => p.id === edge.toPort);
      if (!fp || !tp) return;
      const g = edgeGeom(getPortXY(fn, fp), getPortXY(tn, tp), edge.kind);
      const isSel = selected && selected.type === 'edge' && selected.id === edge.id;

      const hit = document.createElementNS(ns, 'path');
      hit.setAttribute('d', g.d); hit.setAttribute('class', 'dw-fsb__edge-hit');
      hit.addEventListener('click', e => { e.stopPropagation(); selected = { type: 'edge', id: edge.id }; renderAll(); });

      const vis = document.createElementNS(ns, 'path');
      vis.setAttribute('d', g.d);
      vis.setAttribute('class', 'dw-fsb__edge dw-fsb__edge--' + edge.kind + (isSel ? ' is-selected' : '') + (dropTargetEdgeId === edge.id ? ' is-drop-target' : ''));
      svg.appendChild(hit); svg.appendChild(vis);

      if (edge.kind === 'feed' || edge.kind === 'return') {
        const lineMat = edge.material || state.material || 'PTFE';
        const lineBraid = edge.braid || state.braid || 'SS';
        const sa = edge.startAngle === 'Straight' ? 'Str' : (edge.startAngle + '°');
        const ea = edge.endAngle === 'Straight' ? 'Str' : (edge.endAngle + '°');
        const pill = document.createElement('button');
        pill.type = 'button';
        pill.className = 'dw-fsb__line-pill dw-fsb__num' + (edge.kind === 'return' ? ' dw-fsb__line-pill--return' : '') + (isSel ? ' is-selected' : '');
        pill.style.left = g.lx + 'px'; pill.style.top = g.ly + 'px';
        pill.title = 'Click to edit AN size, hose material, braid, length & fitting angles';
        pill.textContent = edge.size + ' ' + lineMat + ' ' + (lineBraid === 'SS' ? 'SS' : 'Nylon') + ' · ' + edge.lengthFt + 'ft · ' + sa + '→' + ea;
        pill.addEventListener('click', e => { e.stopPropagation(); selected = { type: 'edge', id: edge.id }; renderAll(); });
        pills.appendChild(pill);
      }
    });

    if (connecting) {
      const sn = state.nodes.find(n => n.uid === connecting.uid);
      const sc = sn && getComp(sn.compId);
      const sp = sc && sc.ports.find(p => p.id === connecting.portId);
      if (sn && sp) {
        const p1 = getPortXY(sn, sp);
        const ln = document.createElementNS(ns, 'path');
        ln.setAttribute('d', 'M ' + p1.x + ' ' + p1.y + ' L ' + mousePos.x + ' ' + mousePos.y);
        ln.setAttribute('stroke', '#ff5a00'); ln.setAttribute('stroke-width', '3');
        ln.setAttribute('stroke-dasharray', '6 4'); ln.setAttribute('fill', 'none');
        svg.appendChild(ln);
      }
    }
  }

  function updateConnectUI() {
    const btn = $('fsbAddLineBtn'), ban = $('fsbConnectBanner');
    const active = connectMode || !!connecting;
    if (btn) btn.classList.toggle('is-active', active);
    if (ban) ban.hidden = true;
  }

  function handlePort(uid, port) {
    if (!connecting) {
      connecting = { uid, portId: port.id, kind: port.kind, size: port.size };
      connectMode = true;
      renderAll();
      return;
    }
    if (connecting.uid === uid) { connecting = null; connectMode = false; renderAll(); return; }
    pushHist();
    const isRet = connecting.kind === 'return' || port.kind === 'return';
    const isG = connecting.kind === 'gauge' && port.kind === 'gauge';
    const isI = connecting.kind === 'injector' && port.kind === 'injector';
    const isW = connecting.kind === 'wiring' || port.kind === 'wiring';
    const eid = 'e' + Date.now().toString(36);
    const chosenSize = lineDraft.size || (isRet ? '6AN' : (connecting.size === '10AN' || port.size === '10AN' ? '10AN' : '8AN'));
    const newEdge = {
      id: eid, from: connecting.uid, fromPort: connecting.portId, to: uid, toPort: port.id,
      kind: isW ? 'wiring' : isI ? 'injector' : isG ? 'gauge' : isRet ? 'return' : 'feed',
      size: (isW || isI || isG) ? null : chosenSize,
      lengthFt: (isW || isI || isG) ? null : (Number(lineDraft.lengthFt) || 10),
      startAngle: lineDraft.startAngle || 'Straight',
      endAngle: lineDraft.endAngle || '90'
    };
    if (!isW && !isI && !isG) {
      if (lineDraft.material) newEdge.material = lineDraft.material;
      if (lineDraft.braid) newEdge.braid = lineDraft.braid;
    }
    state.edges.push(newEdge);
    connecting = null; connectMode = false; selected = { type: 'edge', id: eid };
    toast('Fuel line added — adjust size, hose & fitting angles below');
    renderAll();
  }

  function renderInspector(analysis) {
    const box = $('fsbInspector');
    if ((connectMode || connecting) && !selected) {
      const angs = ['Straight', '45', '90', '120', '180'];
      const curMat = lineDraft.material || state.material || 'PTFE';
      const curBraid = lineDraft.braid || state.braid || 'SS';
      box.hidden = false;
      box.innerHTML = '<div class="dw-fsb__insp-left">'
        + '<strong style="color:var(--fsb-orange)">New Fuel Line Settings</strong>'
        + '<div class="dw-fsb__field"><label>Size</label><select id="fsbDSize">' + ['6AN','8AN','10AN'].map(s => '<option' + (lineDraft.size===s?' selected':'') + '>' + s + '</option>').join('') + '</select></div>'
        + '<div class="dw-fsb__field"><label>Material</label><select id="fsbDMat"><option value="PTFE"' + (curMat==='PTFE'?' selected':'') + '>PTFE</option><option value="CPE"' + (curMat==='CPE'?' selected':'') + '>CPE</option></select></div>'
        + '<div class="dw-fsb__field"><label>Braid</label><select id="fsbDBraid"><option value="SS"' + (curBraid==='SS'?' selected':'') + '>Stainless</option><option value="Nylon"' + (curBraid==='Nylon'?' selected':'') + '>Black Nylon</option></select></div>'
        + '<div class="dw-fsb__field"><label>Length</label><select id="fsbDLen">' + [6,10,20].map(l => '<option value="' + l + '"' + (Number(lineDraft.lengthFt)===l?' selected':'') + '>' + l + ' ft</option>').join('') + '</select></div>'
        + '<div class="dw-fsb__field"><label>Start Fitting</label><select id="fsbDStart">' + angs.map(a => '<option value="' + a + '"' + (lineDraft.startAngle===a?' selected':'') + '>' + (a==='Straight'?'Straight':a+'°') + '</option>').join('') + '</select></div>'
        + '<div class="dw-fsb__field"><label>End Fitting</label><select id="fsbDEnd">' + angs.map(a => '<option value="' + a + '"' + (lineDraft.endAngle===a?' selected':'') + '>' + (a==='Straight'?'Straight':a+'°') + '</option>').join('') + '</select></div>'
        + '<div class="dw-fsb__insp-note">Set your hose &amp; fitting options now (or change them after connecting) — then click or drag from one glowing + port to another component.</div>'
        + '</div>'
        + '<div style="display:flex;gap:8px"><button type="button" id="fsbCloseInsp" class="dw-fsb__btn dw-fsb__btn--outline">Cancel</button></div>';
      $('fsbDSize').addEventListener('change', e => { lineDraft.size = e.target.value; });
      $('fsbDMat').addEventListener('change', e => { lineDraft.material = e.target.value; });
      $('fsbDBraid').addEventListener('change', e => { lineDraft.braid = e.target.value; });
      $('fsbDLen').addEventListener('change', e => { lineDraft.lengthFt = Number(e.target.value); });
      $('fsbDStart').addEventListener('change', e => { lineDraft.startAngle = e.target.value; });
      $('fsbDEnd').addEventListener('change', e => { lineDraft.endAngle = e.target.value; });
      $('fsbCloseInsp').addEventListener('click', () => { connecting = null; connectMode = false; renderAll(); });
      return;
    }
    if (!selected) { box.hidden = true; return; }

    if (selected.type === 'node') {
      const node = state.nodes.find(n => n.uid === selected.id);
      const comp = node && getComp(node.compId);
      if (!node || !comp) { box.hidden = true; return; }
      const dyn = getDynComp(comp, state.spec);
      const sibs = getAllComponents().filter(c => c.category === comp.category);
      const curveSvg = renderMiniPumpCurveSvg(comp.sku, analysis.req.operatingPsi, analysis.req.reqPumpLph);
      let proofHtml = '';
      if (curveSvg) {
        const atOp = interpolatePumpFlow(comp.sku, analysis.req.operatingPsi);
        proofHtml = '<div class="dw-fsb__curve-box">' + curveSvg
          + '<div class="dw-fsb__num" style="font-size:12px"><div><strong>' + atOp + ' LPH</strong> @ ' + analysis.req.operatingPsi + ' PSI</div>'
          + '<div style="color:var(--fsb-muted)">40 PSI: ' + PUMP_CURVES[comp.sku][40] + ' · 80 PSI: ' + PUMP_CURVES[comp.sku][80] + '</div></div></div>';
      } else if (comp.role === 'injector' && analysis.nodeEvals[node.uid]) {
        const ev = analysis.nodeEvals[node.uid];
        proofHtml = '<div class="dw-fsb__curve-box dw-fsb__num" style="font-size:12px">Flow @ ' + analysis.req.injectorDeltaPsi + ' PSI: <strong>' + ev.actualFlowCc + ' cc/min</strong> · Dead Time: ' + comp.specs.deadTimeMs + 'ms · <strong>' + ev.dutyCycle + '% IDC</strong></div>';
      }
      const connectedLines = state.edges.filter(ed => (ed.from === node.uid || ed.to === node.uid) && (ed.kind === 'feed' || ed.kind === 'return'));
      const lineBtnsHtml = connectedLines.map(ed => {
        const sa = ed.startAngle === 'Straight' ? 'Str' : (ed.startAngle + '°');
        const ea = ed.endAngle === 'Straight' ? 'Str' : (ed.endAngle + '°');
        return '<button type="button" class="dw-fsb__line-chip" data-edit-edge="' + ed.id + '">Edit ' + ed.size + ' ' + (ed.kind === 'return' ? 'Return' : 'Feed') + ' (' + sa + '→' + ea + ')</button>';
      }).join('');
      const hasPlumbPort = comp.ports.some(p => p.kind === 'feed' || p.kind === 'return');
      box.hidden = false;
      box.innerHTML = '<div class="dw-fsb__insp-left">'
        + '<img class="dw-fsb__thumb" src="' + dyn.image + '" alt="" style="width:42px;height:42px" />'
        + '<div class="dw-fsb__field"><label>Swap Model</label><select id="fsbSwapNode">'
        + sibs.map(s => '<option value="' + s.id + '"' + (s.id === comp.id ? ' selected' : '') + '>' + s.name + ' ($' + getDynComp(s, state.spec).price + ')</option>').join('')
        + '</select></div>'
        + (hasPlumbPort ? '<button type="button" id="fsbStartLineFromNode" class="dw-fsb__btn dw-fsb__btn--connect">+ Add Fuel Line</button>' : '')
        + lineBtnsHtml
        + proofHtml
        + '<a class="dw-fsb__btn dw-fsb__btn--outline" href="' + dyn.url + '" target="_blank" rel="noopener">Product Page ↗</a>'
        + '</div>'
        + '<div style="display:flex;gap:8px"><button type="button" id="fsbCloseInsp" class="dw-fsb__btn dw-fsb__btn--outline">Done</button></div>';

      $('fsbSwapNode').addEventListener('change', e => { pushHist(); node.compId = e.target.value; renderAll(); });
      if ($('fsbStartLineFromNode')) {
        $('fsbStartLineFromNode').addEventListener('click', () => {
          const defaultPort = comp.ports.find(p => p.dir === 'out' && (p.kind === 'feed' || p.kind === 'return')) || comp.ports.find(p => p.kind === 'feed' || p.kind === 'return') || comp.ports[0];
          if (defaultPort) {
            connecting = { uid: node.uid, portId: defaultPort.id, kind: defaultPort.kind, size: defaultPort.size };
            connectMode = true;
            selected = null;
            renderAll();
          }
        });
      }
      box.querySelectorAll('[data-edit-edge]').forEach(btn => btn.addEventListener('click', () => {
        selected = { type: 'edge', id: btn.dataset.editEdge };
        renderAll();
      }));
      $('fsbCloseInsp').addEventListener('click', () => { selected = null; renderAll(); });
      return;
    }

    if (selected.type === 'edge') {
      const edge = state.edges.find(e => e.id === selected.id);
      if (!edge) { box.hidden = true; return; }
      box.hidden = false;
      if (edge.kind === 'injector' || edge.kind === 'gauge' || edge.kind === 'wiring') {
        const lbl = edge.kind === 'wiring' ? '12V Hardwire Harness' : 'Direct Mechanical Mount';
        const sub = edge.kind === 'wiring' ? 'Dedicated battery-to-pump relay wiring included in your parts list.' : 'No external hose or swivel ends required.';
        box.innerHTML = '<div class="dw-fsb__insp-left"><strong>' + lbl + '</strong><span style="color:var(--fsb-muted)">' + sub + '</span></div>'
          + '<div style="display:flex;gap:8px"><button type="button" id="fsbDelEdge" class="dw-fsb__btn dw-fsb__btn--outline" style="color:var(--fsb-err)">Remove</button><button type="button" id="fsbCloseInsp" class="dw-fsb__btn dw-fsb__btn--outline">Done</button></div>';
      } else {
        const angs = ['Straight', '45', '90', '120', '180'];
        const curMat = edge.material || state.material || 'PTFE';
        const curBraid = edge.braid || state.braid || 'SS';
        box.innerHTML = '<div class="dw-fsb__insp-left">'
          + '<strong style="color:var(--fsb-navy)">Fuel Line &amp; Fittings</strong>'
          + '<div class="dw-fsb__field"><label>Size</label><select id="fsbESize">' + ['6AN','8AN','10AN'].map(s => '<option' + (edge.size===s?' selected':'') + '>' + s + '</option>').join('') + '</select></div>'
          + '<div class="dw-fsb__field"><label>Material</label><select id="fsbEMat"><option value="PTFE"' + (curMat==='PTFE'?' selected':'') + '>PTFE</option><option value="CPE"' + (curMat==='CPE'?' selected':'') + '>CPE</option></select></div>'
          + '<div class="dw-fsb__field"><label>Braid</label><select id="fsbEBraid"><option value="SS"' + (curBraid==='SS'?' selected':'') + '>Stainless</option><option value="Nylon"' + (curBraid==='Nylon'?' selected':'') + '>Black Nylon</option></select></div>'
          + '<div class="dw-fsb__field"><label>Length</label><select id="fsbELen">' + [6,10,20].map(l => '<option value="' + l + '"' + (Number(edge.lengthFt)===l?' selected':'') + '>' + l + ' ft</option>').join('') + '</select></div>'
          + '<div class="dw-fsb__field"><label>Start Fitting</label><select id="fsbEStart">' + angs.map(a => '<option value="' + a + '"' + (edge.startAngle===a?' selected':'') + '>' + (a==='Straight'?'Straight':a+'°') + '</option>').join('') + '</select></div>'
          + '<div class="dw-fsb__field"><label>End Fitting</label><select id="fsbEEnd">' + angs.map(a => '<option value="' + a + '"' + (edge.endAngle===a?' selected':'') + '>' + (a==='Straight'?'Straight':a+'°') + '</option>').join('') + '</select></div>'
          + '<div class="dw-fsb__insp-note">Matte Black port adapters and matching swivel hose ends are automatically added to your Bill of Materials.</div>'
          + '</div>'
          + '<div style="display:flex;gap:8px"><button type="button" id="fsbDelEdge" class="dw-fsb__btn dw-fsb__btn--outline" style="color:var(--fsb-err)">Remove Line</button><button type="button" id="fsbCloseInsp" class="dw-fsb__btn dw-fsb__btn--outline">Done</button></div>';
        $('fsbESize').addEventListener('change', e => { pushHist(); edge.size = e.target.value; renderAll(); });
        $('fsbEMat').addEventListener('change', e => { pushHist(); edge.material = e.target.value; renderAll(); });
        $('fsbEBraid').addEventListener('change', e => { pushHist(); edge.braid = e.target.value; renderAll(); });
        $('fsbELen').addEventListener('change', e => { pushHist(); edge.lengthFt = Number(e.target.value); renderAll(); });
        $('fsbEStart').addEventListener('change', e => { pushHist(); edge.startAngle = e.target.value; renderAll(); });
        $('fsbEEnd').addEventListener('change', e => { pushHist(); edge.endAngle = e.target.value; renderAll(); });
      }
      $('fsbDelEdge').addEventListener('click', () => { pushHist(); state.edges = state.edges.filter(e => e.id !== edge.id); selected = null; renderAll(); });
      $('fsbCloseInsp').addEventListener('click', () => { selected = null; renderAll(); });
    }
  }

  function renderTelemetry(analysis) {
    const req = analysis.req, s = analysis.summary;
    const lbl = s.status === 'err' ? s.errCount + ' Issue' + (s.errCount > 1 ? 's' : '') : s.status === 'warn' ? s.warnCount + ' Advisory' : '';
    $('fsbTelemetry').innerHTML = '<div class="dw-fsb__tel-items dw-fsb__num">'
      + '<span>Target: <strong>' + req.effectiveCrankHp + ' Crank HP</strong> (' + state.spec.fuel + ')</span>'
      + '<span>Operating Rail: <strong>' + req.operatingPsi + ' PSI</strong></span>'
      + '<span>Pump: <strong>' + (s.primaryPumpFlow || 0) + ' / ' + req.reqPumpLph + ' LPH</strong></span>'
      + '<span>Injectors: <strong>' + (s.bestInjEval ? s.bestInjEval.dutyCycle + '% IDC' : '—') + '</strong> (Rec >= ' + req.reqInjCcAt435 + 'cc)</span>'
      + '</div>' + (lbl ? '<span class="dw-fsb__status-pill dw-fsb__status-pill--' + s.status + '">' + lbl + '</span>' : '');
  }

  function renderBom(analysis) {
    const ab = $('fsbAlerts');
    if (!analysis.warnings.length) {
      ab.innerHTML = '';
      ab.style.display = 'none';
    } else {
      ab.style.display = '';
      ab.innerHTML = '';
      analysis.warnings.forEach(w => {
        const d = document.createElement('div');
        d.className = 'dw-fsb__alert dw-fsb__alert--' + w.level;
        d.textContent = (w.level === 'err' ? '✕ ' : w.level === 'warn' ? '⚠ ' : 'ℹ ') + w.text;
        if (w.targetId) {
          d.addEventListener('click', () => {
            selected = { type: state.nodes.some(n => n.uid === w.targetId) ? 'node' : 'edge', id: w.targetId };
            renderAll();
          });
        }
        ab.appendChild(d);
      });
    }

    const list = $('fsbBomList');
    list.innerHTML = '';
    const grouped = {};
    analysis.bomItems.forEach(it => { (grouped[it.category] = grouped[it.category] || []).push(it); });
    let total = 0, pcs = 0;

    Object.keys(grouped).forEach(cat => {
      const h = document.createElement('div');
      h.className = 'dw-fsb__bom-cat'; h.textContent = cat;
      list.appendChild(h);
      grouped[cat].forEach(it => {
        const ex = !!state.excluded[it.sku];
        const qty = state.qtyOverrides[it.sku] != null ? state.qtyOverrides[it.sku] : it.qty;
        const lt = Math.round(it.price * qty * 100) / 100;
        if (!ex) { total += lt; pcs += qty; }

        const row = document.createElement('div');
        row.className = 'dw-fsb__bom-row' + (ex ? ' is-excluded' : '');
        row.innerHTML = '<input type="checkbox"' + (ex ? '' : ' checked') + ' aria-label="Include ' + it.sku + '" />'
          + '<img class="dw-fsb__bom-thumb" src="' + it.image + '" alt="" loading="lazy" />'
          + '<div style="min-width:0"><div class="dw-fsb__bom-name"><a href="' + it.url + '" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">' + it.name + '</a></div>'
          + '<div class="dw-fsb__bom-sku dw-fsb__num">' + it.sku + ' · $' + it.price + '</div></div>'
          + '<div class="dw-fsb__bom-right"><span class="dw-fsb__bom-price dw-fsb__num">$' + Math.round(lt).toLocaleString() + '</span>'
          + '<div class="dw-fsb__qty"><button type="button" class="q-d">−</button><span class="dw-fsb__num">' + qty + '</span><button type="button" class="q-i">+</button></div></div>';

        row.querySelector('input').addEventListener('change', e => { state.excluded[it.sku] = !e.target.checked; renderAll(); });
        row.querySelector('.q-d').addEventListener('click', () => { state.qtyOverrides[it.sku] = Math.max(1, qty - 1); renderAll(); });
        row.querySelector('.q-i').addEventListener('click', () => { state.qtyOverrides[it.sku] = qty + 1; renderAll(); });
        list.appendChild(row);
      });
    });

    $('fsbPieceCount').textContent = pcs + ' pcs';
    $('fsbSubtotal').textContent = '$' + Math.round(total).toLocaleString();
  }

  function renderMobileGuide(analysis) {
    const nBox = $('fsbMobileNodes'), lBox = $('fsbMobileLines'), addSel = $('fsbMobileAddSel');
    if (!nBox || !lBox) return;

    if (addSel) {
      const all = getAllComponents();
      addSel.innerHTML = '<option value="">+ Add Part...</option>'
        + all.map(c => '<option value="' + c.id + '">' + (c.vehicleFit ? '★ ' : '') + c.name + ' ($' + getDynComp(c, state.spec).price + ')</option>').join('');
    }

    nBox.innerHTML = '';
    if (!state.nodes.length) {
      nBox.innerHTML = '<div class="dw-fsb__m-card" style="color:var(--fsb-muted);text-align:center">No components yet — pick a starter layout above or add a part.</div>';
    } else {
      state.nodes.forEach(node => {
        const comp = getComp(node.compId);
        if (!comp) return;
        const dyn = getDynComp(comp, state.spec);
        const ev = analysis.nodeEvals[node.uid];
        const sibs = getAllComponents().filter(c => c.category === comp.category);
        const roleLbl = comp.role === 'surge_pump' ? 'Surge Tank' : comp.role === 'wiring' ? 'Hardwire Kit' : comp.role.toUpperCase();

        const card = document.createElement('div');
        card.className = 'dw-fsb__m-card';
        card.innerHTML = '<div class="dw-fsb__m-card-top">'
          + '<img class="dw-fsb__node-thumb" src="' + dyn.image + '" alt="" loading="lazy" />'
          + '<div style="min-width:0">'
          + '<div class="dw-fsb__m-role">' + roleLbl + (comp.vehicleFit ? ' · Direct Fit' : '') + '</div>'
          + '<div class="dw-fsb__m-title">' + comp.name + '</div>'
          + '<div class="dw-fsb__m-meta dw-fsb__num">' + dyn.sku + '</div>'
          + '</div>'
          + '<strong class="dw-fsb__num" style="font-size:15px;color:var(--fsb-navy)">$' + dyn.price + '</strong>'
          + '</div>'
          + (ev ? '<div class="dw-fsb__node-badge dw-fsb__node-badge--' + ev.status + ' dw-fsb__num">' + ev.badge + '</div>' : '')
          + '<div class="dw-fsb__m-controls">'
          + '<select aria-label="Swap ' + roleLbl + '">' + sibs.map(s => '<option value="' + s.id + '"' + (s.id === comp.id ? ' selected' : '') + '>' + (s.vehicleFit ? '★ ' : '') + s.name + ' ($' + getDynComp(s, state.spec).price + ')</option>').join('') + '</select>'
          + '<button type="button" class="dw-fsb__m-rm">Remove</button>'
          + '</div>';
        card.querySelector('select').addEventListener('change', e => { pushHist(); node.compId = e.target.value; renderAll(); });
        card.querySelector('.dw-fsb__m-rm').addEventListener('click', () => {
          pushHist();
          state.nodes = state.nodes.filter(n => n.uid !== node.uid);
          state.edges = state.edges.filter(ed => ed.from !== node.uid && ed.to !== node.uid);
          renderAll();
        });
        nBox.appendChild(card);
      });
    }

    lBox.innerHTML = '';
    const fuelLines = state.edges.filter(ed => ed.kind === 'feed' || ed.kind === 'return');
    if (!fuelLines.length) {
      lBox.innerHTML = '<div class="dw-fsb__m-card" style="color:var(--fsb-muted);text-align:center">No fuel lines in this layout yet.</div>';
    } else {
      const angs = ['Straight', '45', '90', '120', '180'];
      fuelLines.forEach(edge => {
        const fn = state.nodes.find(n => n.uid === edge.from), tn = state.nodes.find(n => n.uid === edge.to);
        const fc = fn && getComp(fn.compId), tc = tn && getComp(tn.compId);
        const label = (fc ? fc.name.split(' ')[0] : 'Start') + ' → ' + (tc ? tc.name.split(' ')[0] : 'End') + ' (' + (edge.kind === 'return' ? 'Return' : 'Feed') + ')';
        const curMat = edge.material || state.material || 'PTFE';
        const curBraid = edge.braid || state.braid || 'SS';

        const card = document.createElement('div');
        card.className = 'dw-fsb__m-card';
        card.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px">'
          + '<strong style="font-size:13.5px;color:var(--fsb-navy)">' + label + '</strong>'
          + '<button type="button" class="dw-fsb__m-rm">Remove</button>'
          + '</div>'
          + '<div class="dw-fsb__m-line-grid">'
          + '<div class="dw-fsb__m-line-field"><label>Size</label><select class="ml-sz">' + ['6AN','8AN','10AN'].map(s => '<option' + (edge.size===s?' selected':'') + '>' + s + '</option>').join('') + '</select></div>'
          + '<div class="dw-fsb__m-line-field"><label>Material</label><select class="ml-mat"><option value="PTFE"' + (curMat==='PTFE'?' selected':'') + '>PTFE</option><option value="CPE"' + (curMat==='CPE'?' selected':'') + '>CPE</option></select></div>'
          + '<div class="dw-fsb__m-line-field"><label>Braid</label><select class="ml-br"><option value="SS"' + (curBraid==='SS'?' selected':'') + '>Stainless</option><option value="Nylon"' + (curBraid==='Nylon'?' selected':'') + '>Black Nylon</option></select></div>'
          + '<div class="dw-fsb__m-line-field"><label>Length</label><select class="ml-len">' + [6,10,20].map(l => '<option value="' + l + '"' + (Number(edge.lengthFt)===l?' selected':'') + '>' + l + ' ft</option>').join('') + '</select></div>'
          + '<div class="dw-fsb__m-line-field"><label>Start Fit</label><select class="ml-sa">' + angs.map(a => '<option value="' + a + '"' + (edge.startAngle===a?' selected':'') + '>' + (a==='Straight'?'Straight':a+'°') + '</option>').join('') + '</select></div>'
          + '<div class="dw-fsb__m-line-field"><label>End Fit</label><select class="ml-ea">' + angs.map(a => '<option value="' + a + '"' + (edge.endAngle===a?' selected':'') + '>' + (a==='Straight'?'Straight':a+'°') + '</option>').join('') + '</select></div>'
          + '</div>';
        card.querySelector('.ml-sz').addEventListener('change', e => { pushHist(); edge.size = e.target.value; renderAll(); });
        card.querySelector('.ml-mat').addEventListener('change', e => { pushHist(); edge.material = e.target.value; renderAll(); });
        card.querySelector('.ml-br').addEventListener('change', e => { pushHist(); edge.braid = e.target.value; renderAll(); });
        card.querySelector('.ml-len').addEventListener('change', e => { pushHist(); edge.lengthFt = Number(e.target.value); renderAll(); });
        card.querySelector('.ml-sa').addEventListener('change', e => { pushHist(); edge.startAngle = e.target.value; renderAll(); });
        card.querySelector('.ml-ea').addEventListener('change', e => { pushHist(); edge.endAngle = e.target.value; renderAll(); });
        card.querySelector('.dw-fsb__m-rm').addEventListener('click', () => { pushHist(); state.edges = state.edges.filter(ed => ed.id !== edge.id); renderAll(); });
        lBox.appendChild(card);
      });
    }
  }

  function renderPrintSheet(analysis) {
    const ps = $('fsbPrintSheet');
    if (!ps) return;
    const req = analysis.req, s = analysis.summary;
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const tplObj = TEMPLATES[state.templateId];
    const layoutName = tplObj ? tplObj.shortName : 'Custom';

    // Build clean vector SVG schematic snapshot scaled to fit page width
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    state.nodes.forEach(n => {
      if (n.x < minX) minX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.x + 256 > maxX) maxX = n.x + 256;
      if (n.y + 150 > maxY) maxY = n.y + 150;
    });
    if (!state.nodes.length) { minX = 0; minY = 0; maxX = 800; maxY = 260; }
    if (state.edges.some(e => e.kind === 'return')) maxY += 72;
    const pad = 28, vbW = Math.max(400, (maxX - minX) + pad * 2), vbH = Math.max(220, (maxY - minY) + pad * 2);
    const ox = minX - pad, oy = minY - pad;
    const esc = str => String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    let svgLines = '', svgPills = '', svgNodes = '';
    state.edges.forEach(edge => {
      const fn = state.nodes.find(n => n.uid === edge.from), tn = state.nodes.find(n => n.uid === edge.to);
      if (!fn || !tn) return;
      const fc = getComp(fn.compId), tc = getComp(tn.compId);
      const fp = fc && fc.ports.find(p => p.id === edge.fromPort), tp = tc && tc.ports.find(p => p.id === edge.toPort);
      if (!fp || !tp) return;
      const g = edgeGeom(getPortXY(fn, fp), getPortXY(tn, tp), edge.kind);
      const stroke = edge.kind === 'return' ? '#2563eb' : edge.kind === 'wiring' ? '#d97706' : edge.kind === 'feed' ? '#041a35' : '#94a3b8';
      const dash = (edge.kind === 'return' || edge.kind === 'wiring' || edge.kind === 'injector') ? ' stroke-dasharray="8 5"' : '';
      svgLines += '<path d="' + g.d + '" fill="none" stroke="' + stroke + '" stroke-width="3.2"' + dash + ' />';
      if (edge.kind === 'feed' || edge.kind === 'return') {
        const lm = edge.material || state.material || 'PTFE';
        const lb = (edge.braid || state.braid || 'SS') === 'SS' ? 'SS' : 'Nylon';
        const sa = edge.startAngle === 'Straight' ? 'Str' : (edge.startAngle + '°');
        const ea = edge.endAngle === 'Straight' ? 'Str' : (edge.endAngle + '°');
        const txt = edge.size + ' ' + lm + ' ' + lb + ' · ' + edge.lengthFt + 'ft · ' + sa + '→' + ea;
        const pw = Math.max(146, txt.length * 6.4 + 16);
        svgPills += '<rect x="' + (g.lx - pw / 2) + '" y="' + (g.ly - 12) + '" width="' + pw + '" height="24" rx="12" fill="#ffffff" stroke="' + (edge.kind === 'return' ? '#93c5fd' : '#94a3b8') + '" stroke-width="1.5" />';
        svgPills += '<text x="' + g.lx + '" y="' + (g.ly + 4) + '" text-anchor="middle" font-size="10.5" font-weight="700" fill="' + (edge.kind === 'return' ? '#1d4ed8' : '#041a35') + '">' + esc(txt) + '</text>';
      }
    });
    state.nodes.forEach(node => {
      const comp = getComp(node.compId);
      if (!comp) return;
      const dyn = getDynComp(comp, state.spec);
      const roleLbl = comp.role === 'surge_pump' ? 'SURGE TANK' : comp.role === 'wiring' ? 'HARDWIRE KIT' : comp.role.toUpperCase();
      const titleShort = comp.name.length > 34 ? comp.name.slice(0, 32) + '…' : comp.name;
      svgNodes += '<rect x="' + node.x + '" y="' + node.y + '" width="256" height="118" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />';
      svgNodes += '<rect x="' + node.x + '" y="' + node.y + '" width="256" height="28" rx="10" fill="#041a35" />';
      svgNodes += '<rect x="' + node.x + '" y="' + (node.y + 18) + '" width="256" height="10" fill="#041a35" />';
      svgNodes += '<text x="' + (node.x + 12) + '" y="' + (node.y + 18) + '" font-size="10.5" font-weight="700" fill="#cbd5e1">' + esc(roleLbl + (comp.vehicleFit ? ' · DIRECT FIT' : '')) + '</text>';
      svgNodes += '<text x="' + (node.x + 12) + '" y="' + (node.y + 52) + '" font-size="12.5" font-weight="700" fill="#041a35">' + esc(titleShort) + '</text>';
      svgNodes += '<text x="' + (node.x + 12) + '" y="' + (node.y + 74) + '" font-size="11.5" fill="#64748b">' + esc(dyn.sku) + '</text>';
      svgNodes += '<text x="' + (node.x + 244) + '" y="' + (node.y + 74) + '" text-anchor="end" font-size="13" font-weight="800" fill="#041a35">$' + dyn.price + '</text>';
      const ev = analysis.nodeEvals[node.uid];
      if (ev) {
        svgNodes += '<text x="' + (node.x + 12) + '" y="' + (node.y + 100) + '" font-size="11" font-weight="700" fill="' + (ev.status === 'err' ? '#dc2626' : '#047857') + '">' + esc(ev.badge) + '</text>';
      }
    });
    const svgParts = svgLines + svgNodes + svgPills;

    const grouped = {};
    let total = 0, pcs = 0;
    analysis.bomItems.forEach(it => {
      if (state.excluded[it.sku]) return;
      const qty = state.qtyOverrides[it.sku] != null ? state.qtyOverrides[it.sku] : it.qty;
      const lt = Math.round(it.price * qty * 100) / 100;
      total += lt; pcs += qty;
      (grouped[it.category] = grouped[it.category] || []).push({ it, qty, lt });
    });

    let rowsHtml = '';
    Object.keys(grouped).forEach(cat => {
      rowsHtml += '<tr class="dw-ps__cat-row"><td colspan="5">' + esc(cat) + '</td></tr>';
      grouped[cat].forEach(({ it, qty, lt }) => {
        rowsHtml += '<tr>'
          + '<td style="font-weight:700;white-space:nowrap">' + esc(it.sku) + '</td>'
          + '<td>' + esc(it.name) + '</td>'
          + '<td class="dw-ps__num">' + qty + '</td>'
          + '<td class="dw-ps__num">$' + it.price.toLocaleString() + '</td>'
          + '<td class="dw-ps__num" style="font-weight:800">$' + Math.round(lt).toLocaleString() + '</td>'
          + '</tr>';
      });
    });

    ps.innerHTML = '<div class="dw-ps__header">'
      + '<div><div class="dw-ps__brand">DEATSCH<span>WERKS</span></div><div class="dw-ps__doc-title">Custom Fuel System Build Sheet &amp; Parts List</div></div>'
      + '<div class="dw-ps__meta"><div><strong>Date:</strong> ' + esc(dateStr) + '</div><div><strong>Layout:</strong> ' + esc(layoutName) + ' · ' + esc(state.spec.systemType) + '</div><div>deatschwerks.com</div></div>'
      + '</div>'
      + (activeVehicle ? '<div class="dw-ps__vehicle">Selected Vehicle: ' + esc(formatYMM(activeVehicle)) + '</div>' : '')
      + '<div class="dw-ps__specs">'
      + '<div class="dw-ps__spec-box"><div class="dw-ps__spec-lbl">Target Output</div><div class="dw-ps__spec-val">' + state.spec.power + ' ' + esc(state.spec.powerUnit) + ' (' + req.effectiveCrankHp + ' Crank)</div></div>'
      + '<div class="dw-ps__spec-box"><div class="dw-ps__spec-lbl">Engine &amp; Fuel</div><div class="dw-ps__spec-val">' + state.spec.cylinders + '-Cyl ' + esc(state.spec.induction) + ' · ' + esc(state.spec.fuel) + '</div></div>'
      + '<div class="dw-ps__spec-box"><div class="dw-ps__spec-lbl">Operating Pressure</div><div class="dw-ps__spec-val">' + req.operatingPsi + ' PSI (Base ' + state.spec.basePsi + ' + ' + (state.spec.induction === 'NA' ? 0 : state.spec.boostPsi) + ' Boost)</div></div>'
      + '<div class="dw-ps__spec-box"><div class="dw-ps__spec-lbl">Flow &amp; Duty Cycle</div><div class="dw-ps__spec-val">' + (s.primaryPumpFlow || 0) + ' / ' + req.reqPumpLph + ' LPH · ' + (s.bestInjEval ? s.bestInjEval.dutyCycle + '% IDC' : '—') + '</div></div>'
      + '</div>'
      + '<div class="dw-ps__diagram"><div class="dw-ps__diag-head"><div class="dw-ps__section-title">System Schematic</div>'
      + '<div class="dw-ps__legend">'
      + '<span><i style="border-top:3px solid #041a35"></i>Feed</span>'
      + '<span><i style="border-top:2.5px dashed #2563eb"></i>Return</span>'
      + '<span><i style="border-top:2.5px dashed #d97706"></i>12V Hardwire</span>'
      + '<span><i style="border-top:2px dashed #94a3b8"></i>Direct Mount</span>'
      + '</div></div>'
      + '<svg width="100%" viewBox="' + ox + ' ' + oy + ' ' + vbW + ' ' + vbH + '" style="max-height:195px;display:block">' + svgParts + '</svg>'
      + '</div>'
      + '<div class="dw-ps__section-title">Itemized Bill of Materials (' + pcs + ' pcs · Matte Black Fittings)</div>'
      + '<table class="dw-ps__table"><thead><tr><th>Part #</th><th>Component</th><th class="dw-ps__num">Qty</th><th class="dw-ps__num">Unit</th><th class="dw-ps__num">Total</th></tr></thead><tbody>'
      + rowsHtml + '</tbody></table>'
      + '<div class="dw-ps__total"><span class="dw-ps__total-lbl">Estimated Build Subtotal (' + pcs + ' pcs)</span><span class="dw-ps__total-val">$' + Math.round(total).toLocaleString() + '</span></div>'
      + '<div class="dw-ps__footer"><span>DeatschWerks · Oklahoma City, OK · deatschwerks.com</span><span>Tech Support: techsupport@deatschwerks.com · Pricing &amp; availability subject to change</span></div>';
  }

  function renderAll() {
    renderTemplatePills();
    syncControls();
    renderPalette();
    const analysis = buildAnalysis(state);
    renderCanvas(analysis);
    updateConnectUI();
    renderInspector(analysis);
    renderTelemetry(analysis);
    renderBom(analysis);
    renderMobileGuide(analysis);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  // ---------- REAL Shopify Bulk Cart Add + Slide-Out Cart Drawer ----------
  async function addBuildToShopifyCart() {
    const btn = $('fsbAddCart');
    const analysis = buildAnalysis(state);
    const buildLabel = 'DW ' + state.spec.power + state.spec.powerUnit + ' ' + state.spec.fuel + ' (' + state.material + ' / ' + state.finish + ')';
    const items = [];
    analysis.bomItems.forEach(it => {
      if (state.excluded[it.sku] || !it.variantId) return;
      const q = state.qtyOverrides[it.sku] != null ? state.qtyOverrides[it.sku] : it.qty;
      items.push({ id: it.variantId, quantity: q, properties: { 'Fuel System Build': buildLabel } });
    });
    if (!items.length) { toast('Select at least one component to add'); return; }

    const origText = btn.textContent;
    btn.disabled = true; btn.textContent = 'Adding ' + items.length + ' parts to cart...';
    try {
      const cartDrawer = document.querySelector('cart-drawer');
      const payload = { items };
      if (cartDrawer && typeof cartDrawer.getSectionsToRender === 'function') {
        payload.sections = cartDrawer.getSectionsToRender().map(s => s.id).join(',');
        payload.sections_url = window.location.pathname;
      }
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      const parsed = await res.json();
      if (!res.ok) throw new Error(parsed.description || parsed.message || 'Cart error');

      if (cartDrawer && typeof cartDrawer.renderContents === 'function' && parsed.sections) {
        cartDrawer.classList.remove('is-empty');
        cartDrawer.renderContents(parsed);
      } else {
        window.location.href = '/cart';
      }
      toast('Added ' + items.length + ' components to your cart!');
    } catch (err) {
      toast('Could not add build: ' + err.message);
    } finally {
      btn.disabled = false; btn.textContent = origText;
    }
  }

  function init() {
    state = loadInitialState();

    // Default canvas theme (Clean Technical Light)
    const stageWrap = $('fsbStageWrap');
    const initTheme = root.dataset.defaultCanvasTheme === 'dark' ? 'dark' : 'light';
    stageWrap.dataset.canvasTheme = initTheme;

    // Collapsible Left Parts Catalog Drawer
    const ws = $('fsbWorkspace');
    const hideBtn = $('fsbCollapseCatalog');
    const showBtn = $('fsbShowCatalog');
    if (hideBtn && showBtn && ws) {
      hideBtn.addEventListener('click', () => {
        ws.classList.add('is-catalog-hidden');
        showBtn.style.display = 'inline-flex';
        requestAnimationFrame(fitCanvasToNodes);
      });
      showBtn.addEventListener('click', () => {
        ws.classList.remove('is-catalog-hidden');
        showBtn.style.display = 'none';
        requestAnimationFrame(fitCanvasToNodes);
      });
    }

    // "+ Add Fuel Line" Guided Connect Mode
    const addLineBtn = $('fsbAddLineBtn');
    const cancelConnectBtn = $('fsbCancelConnect');
    if (addLineBtn) {
      addLineBtn.addEventListener('click', () => {
        if (connectMode || connecting) {
          connectMode = false; connecting = null;
        } else {
          connectMode = true; connecting = null; selected = null;
        }
        renderAll();
      });
    }
    if (cancelConnectBtn) {
      cancelConnectBtn.addEventListener('click', () => {
        connectMode = false; connecting = null;
        renderAll();
      });
    }

    // Zoom, Fit & Auto-Align Controls
    if ($('fsbZoomIn')) $('fsbZoomIn').addEventListener('click', () => zoomAt(zoom + 0.15));
    if ($('fsbZoomOut')) $('fsbZoomOut').addEventListener('click', () => zoomAt(zoom - 0.15));
    if ($('fsbZoomFit')) $('fsbZoomFit').addEventListener('click', () => fitCanvasToNodes());
    if ($('fsbAutoAlign')) $('fsbAutoAlign').addEventListener('click', autoAlignCanvas);

    // Pan (Click-Drag empty canvas, Space + Click-Drag anywhere, or Middle-Click Drag) + Ctrl/Cmd Wheel Zoom
    stageWrap.addEventListener('mouseenter', () => { stageHover = true; });
    stageWrap.addEventListener('mouseleave', () => { stageHover = false; });

    stageWrap.addEventListener('wheel', e => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 0.1 : -0.1;
        zoomAt(zoom + factor, e.clientX, e.clientY);
      }
    }, { passive: false });

    stageWrap.addEventListener('mousedown', e => {
      const onUi = e.target.closest('.dw-fsb__inspector') || e.target.closest('.dw-fsb__zoom-bar') || e.target.closest('.dw-fsb__connect-banner');
      if (onUi) return;
      const onNodeOrLine = e.target.closest('.dw-fsb__node') || e.target.closest('.dw-fsb__line-pill') || e.target.closest('.dw-fsb__edge-hit');
      const wantPan = spaceHeld || e.button === 1 || (!onNodeOrLine && e.button === 0);
      if (!wantPan) return;

      e.preventDefault();
      const sx = e.clientX, sy = e.clientY, ox = panX, oy = panY;
      let panned = false;
      isPanning = true;
      stageWrap.classList.add('is-panning');

      function onPanMove(mv) {
        const dx = mv.clientX - sx, dy = mv.clientY - sy;
        if (!panned && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) panned = true;
        if (panned) {
          panX = Math.round(ox + dx);
          panY = Math.round(oy + dy);
          applyViewport();
        }
      }
      function onPanUp() {
        isPanning = false;
        stageWrap.classList.remove('is-panning');
        window.removeEventListener('mousemove', onPanMove);
        window.removeEventListener('mouseup', onPanUp);
        if (!panned && !spaceHeld && e.button === 0) {
          if (connecting || connectMode) { connecting = null; connectMode = false; renderAll(); }
          else if (selected) { selected = null; renderAll(); }
        }
      }
      window.addEventListener('mousemove', onPanMove);
      window.addEventListener('mouseup', onPanUp);
    });

    function pickBestInjectorId(req) {
      const cyl = Number(state.spec.cylinders) || 8;
      const vehInjs = vehicleComps
        .filter(c => c.role === 'injector' && c.specs && c.specs.ccAt435 && (!c.specs.cylinders || c.specs.cylinders === cyl))
        .sort((a, b) => a.specs.ccAt435 - b.specs.ccAt435);
      if (vehInjs.length) {
        const direct = vehInjs.find(c => c.specs.ccAt435 >= req.reqInjCcAt435 * 0.96);
        if (direct) return direct.id;
      }
      const tiers = [{ id: 'inj-550', cc: 550 }, { id: 'inj-750', cc: 750 }, { id: 'inj-1000', cc: 1000 }, { id: 'inj-1200', cc: 1200 }, { id: 'inj-1500', cc: 1500 }, { id: 'inj-2200', cc: 2200 }];
      const pick = tiers.find(t => t.cc >= req.reqInjCcAt435 * 0.96) || tiers[tiers.length - 1];
      return pick.id;
    }

    function pickBestPumpId(req, isSurge) {
      if (!isSurge) {
        const vehPumps = vehicleComps
          .filter(c => c.role === 'pump' && !c.housingOnly)
          .map(c => ({ id: c.id, flow: interpolatePumpFlow(c.sku, req.operatingPsi) || (c.specs && c.specs.nominalLph) || 0 }))
          .filter(p => p.flow > 0)
          .sort((a, b) => a.flow - b.flow);
        if (vehPumps.length) {
          const direct = vehPumps.find(p => p.flow >= req.reqPumpLph);
          if (direct) return direct.id;
        }
      }
      const ids = isSurge
        ? ['st-30-dw420', 'st-55-dw400', 'st-30-dw810']
        : ['pump-dw200', 'pump-dw300', 'pump-dw400', 'pump-dw440', 'mod-x2-dw400', 'mod-x3-dw400'];
      const scored = ids.map(id => {
        const c = getComp(id);
        const flow = c ? (interpolatePumpFlow(c.sku, req.operatingPsi) || (c.specs && c.specs.nominalLph) || 0) : 0;
        return { id, flow };
      }).sort((a, b) => a.flow - b.flow);
      const match = scored.find(p => p.flow >= req.reqPumpLph) || scored[scored.length - 1];
      return match.id;
    }

    function autoSizeCurrentNodes() {
      if (!state.nodes.length) return false;
      const req = computeReq(state.spec);
      const bestInj = pickBestInjectorId(req);
      const hasSurge = state.nodes.some(n => { const c = getComp(n.compId); return c && c.role === 'surge_pump'; });
      const bestPump = pickBestPumpId(req, false);
      const bestSurge = pickBestPumpId(req, true);
      const vehRail = vehicleComps.find(c => c.role === 'rail');
      let changed = false;
      state.nodes.forEach(n => {
        const c = getComp(n.compId);
        if (!c) return;
        if (c.role === 'injector' && n.compId !== bestInj) { n.compId = bestInj; changed = true; }
        else if (c.role === 'surge_pump' && n.compId !== bestSurge) { n.compId = bestSurge; changed = true; }
        else if (c.role === 'pump' && !hasSurge && n.compId !== bestPump) { n.compId = bestPump; changed = true; }
        else if (c.role === 'rail' && vehRail && !c.vehicleFit) { n.compId = vehRail.id; changed = true; }
      });
      // Match each hardwire kit to the pump or surge tank it powers
      state.nodes.forEach(n => {
        const c = getComp(n.compId);
        if (!c || c.role !== 'wiring') return;
        const wEdge = state.edges.find(e => e.kind === 'wiring' && (e.from === n.uid || e.to === n.uid));
        if (!wEdge) return;
        const targetUid = wEdge.from === n.uid ? wEdge.to : wEdge.from;
        const targetNode = state.nodes.find(tn => tn.uid === targetUid);
        const targetComp = targetNode && getComp(targetNode.compId);
        if (!targetComp) return;
        const nom = (targetComp.specs && targetComp.specs.nominalLph) || 340;
        const bestHwk = (targetComp.role === 'surge_pump' || nom >= 650) ? 'hwk-dp' : (nom >= 400 ? 'hwk-hd' : 'hwk-std');
        if (n.compId !== bestHwk) { n.compId = bestHwk; changed = true; }
      });
      return changed;
    }
    window.__dwFsbAutoSize = autoSizeCurrentNodes;

    // ---------- Garage & Year / Make / Model Fitment Integration ----------
    const ySel = $('fsbYmmYear'), mSel = $('fsbYmmMake'), mdSel = $('fsbYmmModel');
    const vCol = $('fsbVehicleCollapsed'), vPick = $('fsbVehiclePicker');
    const vName = $('fsbVehicleName'), vStat = $('fsbVehicleStatus');
    const vChange = $('fsbVehicleChange'), vClear = $('fsbVehicleClear'), vCancel = $('fsbVehicleCancel');
    const fitChip = $('fsbFitChip');

    function populateYmmYears() {
      if (!ySel) return;
      const cur = ySel.value;
      ySel.innerHTML = '<option value="">Year</option>' + getFitmentYears().map(y => '<option value="' + y + '">' + y + '</option>').join('');
      if (cur) ySel.value = cur;
    }

    function populateYmmMakes(year) {
      if (!mSel || !mdSel) return;
      const makes = getFitmentMakes(year);
      mSel.innerHTML = '<option value="">Make</option>' + makes.map(m => '<option value="' + m.replace(/"/g, '&quot;') + '">' + m + '</option>').join('');
      mSel.disabled = !makes.length;
      mdSel.innerHTML = '<option value="">Model</option>';
      mdSel.disabled = true;
    }

    function populateYmmModels(year, make) {
      if (!mdSel) return;
      const models = getFitmentModels(year, make);
      mdSel.innerHTML = '<option value="">Model</option>' + models.map(m => '<option value="' + m.replace(/"/g, '&quot;') + '">' + m + '</option>').join('');
      mdSel.disabled = !models.length;
    }

    function showVehicleCollapsed(ymm, statusText) {
      if (!vCol || !vPick) return;
      vName.textContent = formatYMM(ymm);
      vStat.textContent = statusText || '';
      vCol.hidden = false;
      vPick.hidden = true;
    }

    function showVehiclePicker(allowCancel) {
      if (!vCol || !vPick) return;
      vCol.hidden = true;
      vPick.hidden = false;
      if (vCancel) vCancel.hidden = !allowCancel;
    }

    async function applyVehicle(ymm, persist) {
      if (!ymm || !ymm.year || !ymm.make || !ymm.model) return;
      activeVehicle = { year: String(ymm.year).trim(), make: String(ymm.make).trim(), model: String(ymm.model).trim() };
      if (persist) saveGarage(activeVehicle);
      showVehicleCollapsed(activeVehicle, 'Loading direct-fit parts...');

      await loadFitmentCsv();
      const rows = matchFitmentRows(activeVehicle);
      const bySku = new Map();
      rows.forEach(r => {
        const role = classifyFitmentSku(r.pn, r.pt);
        if (!role) return;
        const key = r.pn.toUpperCase();
        if (!bySku.has(key)) bySku.set(key, { sku: r.pn, role, pt: r.pt });
      });

      const candidates = Array.from(bySku.values()).slice(0, 36);
      const fetched = await Promise.all(candidates.map(async item => {
        const prod = await fetchShopProduct(item.sku);
        return prod ? { item, prod } : null;
      }));

      const built = [];
      const injCyls = new Set();
      fetched.filter(Boolean).forEach(({ item, prod }) => {
        const sku = prod.sku || item.sku;
        const id = 'veh-' + sku.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        if (item.role === 'injector') {
          const cc = extractCcFromText(prod.t) || extractCcFromText(sku);
          const lastM = sku.trim().match(/-(\d+)$/);
          const cyl = lastM ? parseInt(lastM[1], 10) : null;
          if (cyl && [4, 6, 8].includes(cyl)) injCyls.add(cyl);
          if (!cc) return;
          built.push({
            id, sku, category: 'injectors', role: 'injector', vehicleFit: true,
            name: prod.t,
            subtitle: 'Direct-Fit · ' + cc + 'cc' + (cyl ? ' (Set of ' + cyl + ')' : ''),
            price: prod.p || 499,
            ports: [{ id: 'in', label: 'Rail Feed', side: 'top', dir: 'in', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }],
            specs: { ccAt435: cc, deadTimeMs: 1.0, cylinders: cyl }
          });
        } else if (item.role === 'pump') {
          const info = inferPumpCurve(sku, prod.t);
          if (info.curve && !PUMP_CURVES[sku]) PUMP_CURVES[sku] = info.curve;
          const feedSz = info.nominalLph >= 1100 ? '10AN' : info.nominalLph >= 400 ? '8AN' : '6AN';
          const retSz = feedSz === '10AN' ? '8AN' : '6AN';
          const thread = info.isModule ? 'ORB' : 'IN_TANK';
          built.push({
            id, sku, category: 'pumps', role: 'pump', vehicleFit: true, housingOnly: !!info.housingOnly,
            name: prod.t,
            subtitle: info.housingOnly ? 'Direct-Fit Module Housing (Pumps Sold Separately)' : ('Direct-Fit · ' + info.nominalLph + ' LPH @ 43.5 PSI'),
            price: prod.p || 189,
            ports: [
              { id: 'out', label: (thread === 'ORB' ? feedSz.replace('AN','ORB') + ' Feed' : 'Feed Out'), side: 'left', dir: 'out', size: feedSz, thread, kind: 'feed' },
              { id: 'ret', label: (thread === 'ORB' ? retSz.replace('AN','ORB') + ' Return' : 'Return In'), side: 'bottom', dir: 'in', size: retSz, thread, kind: 'return' },
              { id: 'pwr', label: '12V Power', side: 'top', dir: 'in', size: '12V', thread: 'WIRING', kind: 'wiring' }
            ],
            specs: { nominalLph: info.nominalLph }
          });
        } else if (item.role === 'rail') {
          built.push({
            id, sku, category: 'rails', role: 'rail', vehicleFit: true,
            name: prod.t,
            subtitle: 'Direct-Fit Billet Fuel Rail · 8ORB Ports',
            price: prod.p || 279,
            ports: [
              { id: 'in', label: '8ORB In', side: 'right', dir: 'in', size: '8AN', thread: 'ORB', kind: 'feed' },
              { id: 'out', label: '8ORB Out', side: 'left', dir: 'out', size: '8AN', thread: 'ORB', kind: 'feed' },
              { id: 'inj', label: 'Injectors', side: 'bottom', dir: 'out', size: 'EV14', thread: 'INJECTOR', kind: 'injector' }
            ],
            specs: {}
          });
        }
      });

      // Sort direct-fit injectors and pumps cleanly by capacity
      built.sort((a, b) => {
        const order = { pump: 1, injector: 2, rail: 3, filter: 4 };
        if ((order[a.role] || 9) !== (order[b.role] || 9)) return (order[a.role] || 9) - (order[b.role] || 9);
        return ((a.specs && (a.specs.nominalLph || a.specs.ccAt435)) || 0) - ((b.specs && (b.specs.nominalLph || b.specs.ccAt435)) || 0);
      });

      vehicleComps = built;
      if (fitChip) fitChip.hidden = !built.length;

      // Auto-set cylinder count when direct-fit injectors clearly indicate one engine configuration
      if (injCyls.size === 1) {
        const onlyCyl = Array.from(injCyls)[0];
        if (state.spec.cylinders !== onlyCyl) state.spec.cylinders = onlyCyl;
      }

      showVehicleCollapsed(activeVehicle, built.length ? ('(' + built.length + ' Direct-Fit Parts)') : '(Using Universal Catalog)');
      if (state.nodes.length) autoSizeCurrentNodes();
      renderAll();
      if (built.length) toast('Matched ' + built.length + ' direct-fit parts for ' + formatYMM(activeVehicle));
    }

    function clearVehicle() {
      activeVehicle = null;
      vehicleComps = [];
      saveGarage(null);
      if (fitChip) fitChip.hidden = true;
      if (activeCat === 'fit') {
        activeCat = 'all';
        root.querySelectorAll('#fsbChips .dw-fsb__chip').forEach(ch => ch.classList.toggle('is-active', ch.dataset.cat === 'all'));
      }
      // Replace any vehicle-specific canvas nodes back to universal equivalents
      state.nodes.forEach(n => {
        if (n.compId && n.compId.startsWith('veh-')) {
          if (n.compId.includes('7-')) n.compId = 'rail-coyote';
          else if (n.compId.includes('9-')) n.compId = 'pump-dw400';
          else n.compId = 'inj-750';
        }
      });
      if (state.nodes.length) autoSizeCurrentNodes();
      if (ySel) ySel.value = '';
      if (mSel) { mSel.innerHTML = '<option value="">Make</option>'; mSel.disabled = true; }
      if (mdSel) { mdSel.innerHTML = '<option value="">Model</option>'; mdSel.disabled = true; }
      showVehiclePicker(false);
      renderAll();
      toast('Vehicle cleared — showing universal catalog');
    }

    if (ySel && mSel && mdSel) {
      ySel.addEventListener('change', () => populateYmmMakes(ySel.value));
      mSel.addEventListener('change', () => populateYmmModels(ySel.value, mSel.value));
      mdSel.addEventListener('change', () => {
        if (ySel.value && mSel.value && mdSel.value) {
          applyVehicle({ year: ySel.value, make: mSel.value, model: mdSel.value }, true);
        }
      });
    }
    if (vChange) vChange.addEventListener('click', () => {
      showVehiclePicker(!!activeVehicle);
      if (activeVehicle && ySel) {
        ySel.value = activeVehicle.year;
        populateYmmMakes(activeVehicle.year);
        mSel.value = activeVehicle.make;
        populateYmmModels(activeVehicle.year, activeVehicle.make);
        mdSel.value = activeVehicle.model;
      }
    });
    if (vCancel) vCancel.addEventListener('click', () => {
      if (activeVehicle) showVehicleCollapsed(activeVehicle, vehicleComps.length ? ('(' + vehicleComps.length + ' Direct-Fit Parts)') : '(Using Universal Catalog)');
    });
    if (vClear) vClear.addEventListener('click', clearVehicle);

    // Load fitment CSV and auto-pull active vehicle from site-wide Garage
    loadFitmentCsv().then(() => {
      populateYmmYears();
      const g = readGarage();
      if (g) applyVehicle(g, false);
      else showVehiclePicker(false);
    });
    window.addEventListener('storage', e => {
      if (e.key === GARAGE_KEY) {
        const g = readGarage();
        if (g) applyVehicle(g, false);
        else clearVehicle();
      }
    });

    function runAutoMatch(silent) {
      const req = computeReq(state.spec);
      if (state.templateId === 'blank') {
        if (state.nodes.length > 0) {
          autoSizeCurrentNodes();
          renderAll();
          if (!silent) toast('Updated injectors & pump for ' + req.effectiveCrankHp + ' Crank HP @ ' + req.operatingPsi + ' PSI');
        } else {
          renderAll();
        }
        return;
      }
      const prevTid = state.templateId;
      const tid = req.reqPumpLph > 950 ? 'race' : (req.reqPumpLph <= 390 && state.spec.systemType === 'Returnless' ? 'street' : (req.reqPumpLph <= 420 && prevTid === 'street' ? 'street' : 'high-hp'));
      if (tid !== prevTid) {
        const tpl = clone(TEMPLATES[tid]);
        state.templateId = tid;
        state.nodes = tpl.nodes;
        state.edges = tpl.edges;
        if (tpl.defaultSpec.systemType !== state.spec.systemType) applySystemTypeToCanvas(state.spec.systemType);
      }
      autoSizeCurrentNodes();
      // Keep main feed lines sized cleanly for the target flow
      const feedSz = req.reqPumpLph > 950 ? '10AN' : req.reqPumpLph > 420 ? '8AN' : '6AN';
      state.edges.forEach(e => {
        if (e.kind !== 'feed') return;
        const tn = state.nodes.find(n => n.uid === e.to);
        const tc = tn && getComp(tn.compId);
        if (tc && tc.role === 'surge_pump') return; // keep lift line 6AN
        if (tc && tc.role === 'regulator') { e.size = feedSz === '10AN' ? '8AN' : feedSz; return; }
        e.size = feedSz;
      });
      // Match filter & regulator port sizing to feed line size
      state.nodes.forEach(n => {
        const c = getComp(n.compId);
        if (!c) return;
        if (c.role === 'filter') n.compId = feedSz === '10AN' ? 'flt-160-10' : 'flt-110-10';
        if (c.role === 'regulator') n.compId = feedSz === '10AN' ? 'reg-dwr2000' : 'reg-dwr1000';
      });
      if (state.spec.fuel !== 'Gasoline' && state.material === 'CPE') state.material = 'PTFE';
      state.excluded = {}; state.qtyOverrides = {}; selected = null; connecting = null; connectMode = false;
      renderAll();
      if (tid !== prevTid) requestAnimationFrame(fitCanvasToNodes);
      if (!silent) toast('Matched system for ' + req.effectiveCrankHp + ' Crank HP @ ' + req.operatingPsi + ' PSI');
    }

    const bindSpec = (id, key, num) => {
      const el = $(id);
      el.addEventListener('change', e => {
        const val = num ? Number(e.target.value) : e.target.value;
        if (num && (!val || Number.isNaN(val))) return;
        pushHist();
        state.spec[key] = val;
        runAutoMatch(false);
      });
      if (num && el.tagName === 'INPUT') {
        let t;
        el.addEventListener('input', e => {
          clearTimeout(t);
          t = setTimeout(() => {
            const val = Number(e.target.value);
            const minLive = key === 'power' ? 50 : key === 'basePsi' ? 30 : 0;
            if (!Number.isNaN(val) && val >= minLive) {
              state.spec[key] = val;
              runAutoMatch(true);
            }
          }, 420);
        });
        el.addEventListener('keydown', e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            clearTimeout(t);
            const val = Number(e.target.value);
            if (!Number.isNaN(val) && val > 0) {
              pushHist();
              state.spec[key] = val;
              el.blur();
              runAutoMatch(false);
            }
          }
        });
      }
    };
    bindSpec('fsbPower', 'power', true);
    bindSpec('fsbPowerUnit', 'powerUnit', false);
    bindSpec('fsbDrive', 'drivetrain', false);
    bindSpec('fsbCyl', 'cylinders', true);
    bindSpec('fsbInd', 'induction', false);
    bindSpec('fsbBoost', 'boostPsi', true);
    bindSpec('fsbBasePsi', 'basePsi', true);
    bindSpec('fsbFuel', 'fuel', false);
    $('fsbSysType').addEventListener('change', e => {
      pushHist();
      state.spec.systemType = e.target.value;
      applySystemTypeToCanvas(state.spec.systemType);
      autoSizeCurrentNodes();
      renderAll();
      requestAnimationFrame(fitCanvasToNodes);
    });

    root.querySelectorAll('#fsbMatToggle .dw-fsb__seg-btn').forEach(b => b.addEventListener('click', () => {
      pushHist(); state.material = b.dataset.val;
      state.edges.forEach(e => { if (e.kind === 'feed' || e.kind === 'return') delete e.material; });
      state.qtyOverrides = {}; renderAll(); toast('Set all fuel lines to ' + state.material);
    }));
    root.querySelectorAll('#fsbBraidToggle .dw-fsb__seg-btn').forEach(b => b.addEventListener('click', () => {
      pushHist(); state.braid = b.dataset.val;
      state.edges.forEach(e => { if (e.kind === 'feed' || e.kind === 'return') delete e.braid; });
      renderAll(); toast('Set all fuel lines to ' + (state.braid === 'SS' ? 'Stainless Steel' : 'Black Nylon'));
    }));

    root.querySelectorAll('#fsbChips .dw-fsb__chip').forEach(ch => ch.addEventListener('click', () => {
      activeCat = ch.dataset.cat;
      root.querySelectorAll('#fsbChips .dw-fsb__chip').forEach(c => c.classList.toggle('is-active', c === ch));
      renderPalette();
    }));
    let stimer;
    $('fsbSearch').addEventListener('input', e => { clearTimeout(stimer); stimer = setTimeout(() => { searchQuery = e.target.value; renderPalette(); }, 90); });

    stageWrap.addEventListener('dragover', e => {
      e.preventDefault();
      const comp = draggingCompId ? getComp(draggingCompId) : null;
      if (comp && canInsertOnEdge(comp)) {
        const pt = screenToStage(e.clientX, e.clientY);
        const hit = findEdgeNearPoint(pt.x, pt.y, null);
        if (hit !== dropTargetEdgeId) { dropTargetEdgeId = hit; renderEdges(); }
      }
    });
    stageWrap.addEventListener('dragleave', () => {
      if (dropTargetEdgeId) { dropTargetEdgeId = null; renderEdges(); }
    });
    stageWrap.addEventListener('drop', e => {
      e.preventDefault();
      const cid = e.dataTransfer.getData('text/plain') || draggingCompId;
      const targetEdge = dropTargetEdgeId;
      draggingCompId = null;
      dropTargetEdgeId = null;
      if (!cid) return;
      const comp = getComp(cid);
      const pt = screenToStage(e.clientX, e.clientY);
      const nx = Math.max(20, Math.round((pt.x - 128) / SNAP) * SNAP);
      const ny = Math.max(20, Math.round((pt.y - 60) / SNAP) * SNAP);
      if (targetEdge && comp && canInsertOnEdge(comp)) {
        pushHist();
        const uid = 'n' + Date.now().toString(36) + Math.floor(Math.random() * 99);
        state.nodes.push({ uid, compId: cid, x: nx, y: ny });
        insertNodeIntoEdge(uid, comp, targetEdge);
        selected = { type: 'node', id: uid };
        renderAll();
        toast('Inserted ' + comp.name + ' into fuel line — fittings updated');
      } else {
        addNode(cid, nx, ny);
      }
    });
    stageWrap.addEventListener('mousemove', e => {
      if (!connecting) return;
      mousePos = screenToStage(e.clientX, e.clientY);
      renderEdges();
    });

    function doUndo() { if (!past.length) return; future.push(clone(state)); state = past.pop(); renderAll(); }
    function doRedo() { if (!future.length) return; past.push(clone(state)); state = future.pop(); renderAll(); }

    window.addEventListener('keydown', e => {
      const tag = (e.target && e.target.tagName) || '';
      const inField = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (e.target && e.target.isContentEditable);
      if (e.code === 'Space' && !inField && (stageHover || isPanning)) {
        e.preventDefault();
        if (!spaceHeld) {
          spaceHeld = true;
          stageWrap.classList.add('is-space-pan');
        }
      }
      if (e.key === 'Escape' && (connecting || connectMode)) { connecting = null; connectMode = false; renderAll(); }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey) { e.preventDefault(); doUndo(); }
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'y' || (e.shiftKey && e.key.toLowerCase() === 'z'))) { e.preventDefault(); doRedo(); }
    });
    window.addEventListener('keyup', e => {
      if (e.code === 'Space' && spaceHeld) {
        spaceHeld = false;
        stageWrap.classList.remove('is-space-pan');
      }
    });
    window.addEventListener('blur', () => {
      if (spaceHeld) { spaceHeld = false; stageWrap.classList.remove('is-space-pan'); }
    });

    $('fsbAddCart').addEventListener('click', addBuildToShopifyCart);
    $('fsbCopyBuild').addEventListener('click', () => {
      const compact = { t: state.templateId, s: state.spec, m: state.material, b: state.braid, f: state.finish, n: state.nodes, e: state.edges, x: state.excluded, q: state.qtyOverrides };
      const hash = '#build=' + encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(compact)))));
      history.replaceState(null, '', hash);
      navigator.clipboard?.writeText(location.href).catch(() => {});
      toast('Shareable build link copied');
    });
    $('fsbCopyCartLink').addEventListener('click', () => {
      const analysis = buildAnalysis(state);
      const parts = analysis.bomItems
        .filter(i => !state.excluded[i.sku] && i.variantId)
        .map(i => i.variantId + ':' + (state.qtyOverrides[i.sku] != null ? state.qtyOverrides[i.sku] : i.qty));
      const url = (root.dataset.shopOrigin || location.origin) + '/cart/' + parts.join(',');
      navigator.clipboard?.writeText(url).catch(() => {});
      toast('Staff quote cart link copied (' + parts.length + ' items)');
    });
    if ($('fsbMobileAddSel')) {
      $('fsbMobileAddSel').addEventListener('change', e => {
        const cid = e.target.value;
        if (!cid) return;
        addNode(cid);
        e.target.value = '';
      });
    }

    $('fsbPrint').addEventListener('click', () => {
      renderPrintSheet(buildAnalysis(state));
      window.print();
    });
    window.addEventListener('beforeprint', () => {
      if (state) renderPrintSheet(buildAnalysis(state));
    });

    renderAll();
    requestAnimationFrame(fitCanvasToNodes);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
