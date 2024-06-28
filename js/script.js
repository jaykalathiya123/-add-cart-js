
const StudantData = document.getElementById("StudantData");


let studant = [{
  title: "toy car",
  list: "With supporting text below as a natural lead-in to additional content.",
  Image: "https://picsum.photos/250/300?1",
  preaice: 450,
}, {
  title: "bage",
  list: "With supporting text below as a natural lead-in to additional content.",
  Image: "https://picsum.photos/250/300?2",
  preaice: 900,
},
{
  title: "NUTSS",
  list: "With supporting text below as a natural lead-in to additional content.",
  Image: "https://picsum.photos/250/300?4",
  preaice: 40,
},
{
  title: "pen",
  list: "With supporting text below as a natural lead-in to additional content.",
  Image: "https://picsum.photos/250/300?3",
  preaice: 10,
}];


studant.forEach((ele) => {
  StudantData.innerHTML += (`<div class="col-4
    ">
                                            <div class="card text-center" style="width: 18rem;">
                                                <div class="card-body">
                                                <img src=${ele.Image} alt="img" >
                                                <h5 class="card-title">
                                                ${ele.title}
                                                </h5>
                                                <p class="card-text">
                                                ${ele.list}
                                                </p>
                                                 <p class="card-text">
                                                preaice:-${ele.preaice} rupes
                                                </p>
                                                <a href="#" class="btn btn-primary" onclick="return dataShow ()"="return fromsub()">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                `);
                                
});

const dataShow = () => {

  addData.forEach((ele) => {

    viweData.innerHTML +=
      `<tr>
        <td>${ele.id}</td>
        <td>${ele.title}</td>
        <td>${ele.Image}</td>
        <td>${ele.preaice}</td>
      </tr>`
  });
}