module.exports.home = (req, res) => {
    res.render("clients/pages/home/index" , {
        pageTitle : "Trang chủ"
    });
  }