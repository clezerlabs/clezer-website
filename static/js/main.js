const onSubmitForm = () => {
    const email = document.getElementById("mce-EMAIL").value;
    const festival = document.getElementById("mce-MMERGE1").value;

    if (email.length !== 0 && festival.length !== 0) {
        if (email.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi)) {
            const body = `EMAIL=${email}&MMERGE1=${festival}`;
            fetch(
                "https://clezer.us16.list-manage.com/subscribe/post?u=086778708bdcba469ec0698ef&id=aed28ef993",
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    body
                }
            )
                .then(res => res.json())
                .then(data => data)
                .catch(err => console.log("error", JSON.stringify(err)));

            alert("Thank you !");
        } else {
            alert("Your email is not valid.");
        }
    } else {
        alert("Information is missing.");
    }
};
