function update() {
    fetch(wepoUrl, headers)
      .then((res) => {
        return res.json();
        //return res.json();
      })
      .then(res => {
        console.log(res.view.list.data.list)
        setResult(res.view.list.data.list)
    })
      .catch((err) => console.log(err.message));
}