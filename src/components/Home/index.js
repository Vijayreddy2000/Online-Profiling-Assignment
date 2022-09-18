import {
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaSnapchatGhost,
} from "react-icons/fa";
import Popup from "reactjs-popup";

import { Fragment } from "react";
import "./index.css";

const Home = () => {
  return (
    <Fragment>
      <div className="fullcont">
        <div className="insidecont">
          <div className="image-cont">
            <img src="https://i.ibb.co/1XKDFG1/image001.png" alt="Tonmetri" />
          </div>
          <div>
            <div className="rows container6">
              <img
                src="data:image/png;base64,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"
                className="rounded-circle"
                alt="Cinque Terre"
                width="150"
                height="180"
              />

              <div>
                <h1 className="heading1">Akhil Chakravarthy</h1>
                <p className="paragraph">CEO/Managing Director</p>
                <h2 className="heading2"> TECHNO SOFTWARE SOLUTIONS</h2>
              </div>
            </div>
            <div className="center social">
              <FaFacebookSquare className="contact-icon p-2" />

              <FaGoogle className="contact-icon p-2" />
              <FaTwitter className="contact-icon p-2" />
              <FaInstagram className="contact-icon p-2" />
              <FaLinkedin className="contact-icon p-2" />
              <FaSnapchatGhost className="contact-icon p-2" />
            </div>
            <div className="center">
              <div className="popup-container1">
                <Popup
                  modal
                  trigger={
                    <button type="button" className="trigger-button">
                      Share
                    </button>
                  }
                >
                  {(close) => (
                    <>
                      <div>
                        <div>
                          <br />
                          <br />
                          <div class="d-flex justify-content-xl-center jumbotron jumbotron-fluid rounded">
                            <div class="container5">
                              <form>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">
                                    sharing <b>Akhil Chakravarthy's</b> Tako
                                    Card
                                  </label>{" "}
                                  <br />
                                  <br />
                                  <br />
                                  <div class="form-group">
                                    <input
                                      type="name"
                                      className="form-control"
                                      id="exampleInputPassword1"
                                      size="50"
                                      maxlength="4"
                                      placeholder="Enter Name "
                                    />
                                  </div>
                                  <br />
                                  <div class="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      id="customRadio1"
                                      name="customRadio"
                                      class="custom-control-input"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="customRadio1"
                                    >
                                      WhatsApp
                                    </label>
                                  </div>
                                  <div class="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      id="customRadio2"
                                      name="customRadio"
                                      class="custom-control-input"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="customRadio2"
                                    >
                                      SMS
                                    </label>
                                  </div>
                                  <div class="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      id="customRadio2"
                                      name="customRadio"
                                      class="custom-control-input"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="customRadio2"
                                    >
                                      Email
                                    </label>
                                  </div>
                                </div>
                                <br />
                                <div class="form-group">
                                  <input
                                    type="password"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    size="50"
                                    maxlength="4"
                                    placeholder="EnterPhoneNumber/EnterEmail "
                                  />
                                </div>
                                <br />

                                <button type="submit" class="trigger-button">
                                  Submit
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Close
                        </button>
                      </div>
                    </>
                  )}
                </Popup>
              </div>
            </div>
          </div>

          <div class="container2 ">
            <h4 className="head1">About</h4>
            <p className="para1">
              Lorem Ipsum is simply dummy text of the parinting and type settig
              industry.Lorem Ipsum has been the industry's standard dummy te
              ever since the 1500s,when an unknown printer took aga lley of ty
              and scrambled it to make a type specimen book.
              <br />
              It has survived n only five centuries,but also the leap into
              electronic type setting, remaining essentially unchanged.
              <br />
              <b>It was popularised in the 1960</b> swith there lease of Letra
              set sheets containing.
              <br />
              Lorem Ipsum passages,and more recently with desktop publishi
              software like Aldus PageMaker including versions of LoremIpsum.
              <br />
              Developed by <b>Vijay Reddy</b>
            </p>
          </div>
          <div class="container3  text-white">
            <h4>Services</h4>
            <p className="para2">
              Lorem Ipsum is simply dummy text of the parinting and type settig
              industry.Lorem Ipsum has been the industry's standard dummy te
              ever since the 1500s.
            </p>
            <img
              src="https://i.ibb.co/bQBr36N/Screenshot-97.png"
              className="image2"
              alt="services"
            />
          </div>

          {/* Portfolio container */}

          <div class="container3   text-white">
            <h4>Portfolio</h4>
            <p className="para2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat..
            </p>
            <div className="rows">
              <img
                src="data:image/jpeg;base64,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"
                alt="lorum"
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="lorum"
              />
            </div>
            <div className="rows">
              <img
                src="data:image/jpeg;base64,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"
                alt="lorum"
              />
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAeQMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEHAP/EADwQAAICAQIEAQgHBwQDAAAAAAECAAMRBBIFBiExEyJBUWFxgZGxByVyc6GywTI0NVKSosIzY4KTFBUj/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECAwUEBgf/xAAzEQEAAgEDAQQJAwMFAAAAAAAAAQIDBBExIQUSMkEiM1FhcYHB0fAjkeEGE0I0Q6Gxsv/aAAwDAQACEQMRAD8A8vAm5ikFlEwsG6YWBILKOhYN3dsG7u2EfbYHxWF3c2wbolZBErAgRAgwkEceqBMCUECwiYWBMLKJhYEgkokEgfbBA7sEDhSBEpAiVkECsCBWFQYSCG2BNRCCKsoKqwCKkomEgTCRsiNr00LvvYqmeuBk+4RPRWs4Fxbg50vg6S/YdwDLYhVifWcdZlFq+SdWgs4FpLa2e6ul1xksVAx75d4NlDreXuHLQ97Wvp0UZJznHuPf4xNYg3ZFClq+JUcoScEjB9480177q4UlECkAbLIBssCG2FSUQgyrCCqsoKqQCKkomElA9TpfHVdrbWU5BIyJjMbrAo0QTh6MGXxPFG5SRnPmx0zjGDnPf0dJJjaFgTjnG9Rr9fp9Ko1FVelArr8vG7sNwYKCMj1n29Zqr1sznhLiGrsdrahY2pprbYpbPXOMMFPt8+JvmZayOm09lSN4z73ZixJHpkiNiZEKSoGySKGyQBMsCG2QfIsIOiygyrAKqSgqrKJOUqrNlhCovckyTMR1kiN1hwinR6xz4Wv0ttnZakcZ+BHWYRbvTyz22W78Cs8gU6ejUMx3HT2OF8QDvt64z8BM5iZjaGHe2ZTmoNRqmtXT6rT0Y8jKEAAdgCCfnPLFJr12bu9E9Nz3ANBxDj3D7OI6XTtcPFKMQVySAOuPfN+O28by12jqjqdJbpn8O+p6n/ldSD+M2MSzJAGyQBMkxAXWFQ2wOIO0IOixAOizIGVYBVWEVvNCY4O59DCac/hj4tmPmWx+jzgmm13K2j1LPdXqGDqbEbOBvYdAcjsB5p8d2n2tqdNqppTbuxt029zr4MGO2GJmOq113K+tatAnEV1IqbdWNRUAwb07lH6TPD/U0T0y02+E/dhOirPhlluI8u8Q2mriNevvrUDb4epFg9/QH4ATsYO2NNm6d/b3S0W0GSvWI3W3LfGtHy3wwaW1dRUN5YJXpnDDPpz1Pm7To01GGI6zDRbBk34Lcz8+aai5KUoTWMRuKX1bcg9sHHp88znPSa70ndjGG0TtbozvC7n1eiFtqgNkjA9U2YbTeu8sMtYrbYdkmxrCZIAHWSRDbIIViAdBKhhFlB0WUGRYFXzan1K32x8jNWbw/NnTlv8A6NCK+VdOg7Kzj+4z4fUaemq7WriycW2/6dnvTj0vejya20eRnM92f+k45w5P3+8fZ5cfae3jqp9Xqa6mIewJ6zOZl7B1uDmm8e7r/P8Aw6WLX4L/AOW3xLWGuwYtRHU+kd546ZMmPpWZh7e7Fnmv0iaaijU8PNaYLG8Hr5gEIH4mfR9k5b3pfefZ9XL1sRW9fn9BeBJ9WKfS5Pxn0mm9XDkaj1km3Wb2kFlkUB1gD2wBViYwhisTIMoIBlWUMVrLAr+akB4Jbu/mE1Z/Cypy1HIFvhcvUoT18W387T5LHXftik/D/wAuxf8A0VvzzX736myqldbo1vCspD1t1U9MnHoxn29sT7Lr5w4XTyZvVa+q5FpxfXbtya7x5S9+h/pPwl3jhdjY1GK1GfMJ+b5ab5bfGX19J9GGI5/sFt/DST0Vbj8dgna7IrtW/wAvq8Gune1fn9DfLo3cIrPn3EfAz6fTx+nDjZ5/Uk269ZtagHWABxIoeIAKxIhlBKGEEoOiwGK1mUCv5tGOBv6d4+RmnPO1GeON7G+VdUaeEVgEg77D7y7T5eL1xdoVy34j7Oz3ZvpZrXmfu0CcTayoV3V03DJz5vn5/fPqsWoxZfBaJ+biZMN6eKNiXEdVRaoDoynd5IsGcHPmPtm2ZhhEFjf5I6+afAXp6c/F9VFukMlznaTdoSAD5L5+Kzrdm19G/wAvq8Oqt6dfz2Lvl1fqev7b/OfQ6b1UOVn9ZJuwTdLUXcSADrIoW2AvXIhlBKGaxKGEEsBisSis5wIXhCZ7eMvyM06n1bPF4ivArj/6yrpg5Yke8z5XV1/Vl3NPPoLEXETzd32N2743kjufjPVi1mox8W/fq02wY7cwgX6TzT1ndtZrmgmy/TKg3f8Azf5qf0nU0MbVn4x9Xj1HW8NPy2v1LT36sx6+2d7TeqhzM/rJN2LNzUXcTEL2CALEgVrgNVwGUEoYQSwGK5kit5rrts4Yi0oGPignPbsZ5NZMf2439rbi8SXK3Ab9ZwquxdZpwNxygIyOp8xOe8+W12etM3d7suzgmO5yY1XCtTQ+xLNPcc48i0A/BsHPqGZpplpbmJj8927b152V9626ZwmpqspY9ltQqT7M95tiItG9eqd6EC5Il7i7qjiKs2p07ipnVThiOuBnqMesCe7B4ZhoyRO8Ts1HA6vB4VVWTu2lhn09TO9pZ72GsuTqI2yTBiyb2kB5FLWSAUBOuQNVyhquAwkyDCQjP8/X208Io8Gx0J1AzsbGRtaas3WrKnKn5f5i4hw7TDw6dNdXnGbKvKH/ACGDOJqtJhzW9LeJ+P5DoYct6RvDV8P5x0OpXZrtNtB79RYv44I/unNv2dNJ3pP0+/0equq35XdFGh4hUV4TrthIz4KNvX/qbr+E0WxZaTveu/v/AJj7tn9ylvPYvZwOi0/+NqKDptZ2Vqcoth+ww2+4EGap1F6elvvX3+Xzjr+7LuxPEsRzC1Og0i1Wo7ap2LLbnCqoJGMZ6kkE/D39vS1nJbvRO1fZ73lzZIrG08tFy3YLeA6Rxu8pSTuPXOTmd/DERjiIcq8726nHmxgA8ilrJAKFJVGRDVZlDVZgMIZQwhlRnPpBP1Tp/v8A/FppzcQyryz3Bf3X3zj6nxOlg8JyzTU2kllAPpHSaa5L14Z2pWeQjpLE6VXnb/KwmyM8b7zDXOKfKT1PF+M0Vim3VWailSCtdtm8DHbG7qPcZjauG896Y6/ArGSvEszxLV3avU7rz0LHpknz+sme/FStK+i817Ta3V6HysMcu6IH+Q/mM6GPwQ89uVg8zQB5AtZIBZhVfUZENVmA1WZQyhlgMVmUZz6QP4Xpvvv8TNObiGVOWf4P+7e/9Jx9R4nRw+E+J521LMgg7dDMogZzV48SvHrz/UZ06cT+eUPBfl6Ry0ccv6H7v9TPfj8MPPbk8xmaF7DMQtYYAsyKrq2mMBqtpkhmtpQzW0BhGmQzvP5zwzTfff4mac3EMqs5prW0/DndMbgV79uwnNtSL5YiXsraa494Ep4qnQXVlT6R1mN9JP8AjK11EecHE1NNv+nYpPoz1+E89sV68w3RkrbiXXbyT7JjEdWTPajranv/ADNOnXifzyeCeXpHADt4HoR/srPfTww0TybdpZQu7SBexpFB3QEKpiGq5khmvtAZrlDCSjO8+fw3TffH8pmrNxDKrOJ/Cn+0vyWeD/fj89r1T6km/wCyJ654ecNf2q/aPnMJ8MrHMNFb+y3snKjl0fJQW/6qew/Np0Y4l4p8UPR+CfwXQ/cL8p7qeGHnnkw/eVALIUtZIBQP/9k="
                alt="lorum"
              />
            </div>
          </div>

          {/* Videos container */}

          <div class="container3 ">
            <h4>Videos</h4>
            <p className="para2 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat..
            </p>
            <img
              src="https://i.ibb.co/JKWHsnZ/Screenshot-95.png"
              className="image2"
              alt="cream"
            />
          </div>
          {/* Clients container */}
          <div class="container4 ">
            <h4 ml-3>Clients</h4>
            <p1 className="para2">
              Lorem Ipsum is simply dummy text of the parinting and type settig
              industry.Lorem Ipsum has been the industry's standard dummy te
              ever since the 1500s.
            </p1>
            <div className="rows image6">
              <img
                src="data:image/jpeg;base64,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"
                alt="client"
                className="image6"
              />
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASDxAPEA8QEA8PDw8PDQ8QDRAPDg8NFREWFhcRFRUYHSggGBolHRUVITIhJSkrLi4uIx8zODUtNygtLisBCgoKDg0OFQ8PFy0dFR0rKy0tLSsrLS0tKysrKystKy0tLS0tKy0tLS0rLS0rLS0rLS0tLSstLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EAD4QAAICAQIDBQUFBgMJAAAAAAABAhEDEiEEMUEFE1FhcSIygZGxBlKhwdEjQnKC4fAUYtIWMzRzg5KTosL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAfEQEBAQABBQEBAQAAAAAAAAAAARECAxIhMVETIkH/2gAMAwEAAhEDEQA/APpCUiEGz6byp2FEBAASyAAAAAAAAAAAAAAAAAAAAI0iisEWYUBDIAmxZAAsSULATRJAIM4kBMloqIAJSAdCCWQBfHjv0Nu4RbCtkbpGbWscU8NEUjo4h7HJZYi9Iq4kWWTKKMJF5InCtwLQwiWE64oNGdXHnNA1zozjGzSIFHRHCXWAmmMoxDRu4GcoDRm0VcSzRAFATJFSoksipKCrggEGYTAKibG5MUawQVnGBdYzojAsoGdXFcGxtJoRgRKBlXLnd+hztHZOBhOJuMsSQ0QVF4kxdMrETCu2ExKZxRmw8jJhq+R2zXBAphxN8lZ1Qg1zRLVaRgXcREuzna0y0lJQN0iJRLqOKcCMeHqzpnERWxrUxm8arkceXHTO9nJxLLKVgWRBKNIkkAgyALxxFRaK5G+OJnjVbM6oRM2tLQiX0kxJSMWqRQlEuokuJnVc0omGSJ1yRhNG5UrimiiRvkRXFHc2ytDEVy4zrjyKTrT538NNL+pNVwlsUbkl4sZOYxumn4Gke5hgkqNZQTRhw+ZNGuTMkvM813XRzJF0URZGqiSaJirJbIMZxMm6OpyMMyNcaVzZcxzPc1yGdHWMIBJVyAuDOyCiEdEWc4sDqvc3xnHjZ1Y2Zqx0RNIlMUbNXj8DlWkiyikROdKyYEmYzLyv4GGRm5EZZUYqdMnJIxOkZdSymkJxdR21StJO/BbnDZpHG5xcE6vm171VyXgLBMsTtldFHXoS28l9Ck4jRXEzpgzjizohIlWOmLLJmUZF1IxYrWD5lWyqmG0zOKrJmWaWxeTRyZslnSRKznMz1CTINsjYACAAKAAILQZ0Y5HKaQkKr0uHydDd5FRwNvTB0qadV1p9SVM5XjrWujUS2YxmRKZcCeaWpR03Fq3NNbSXRopOZWWTpezaTa509mY5HuakTVcqKKJtjjZtHEXUcvdm/DYnfLl9TdYyZYZdKSSXN02/EmrjOe3x3Mskzq4nEtKcW5Nc/H5HnTE8lQpG0JmATNI7YzNFI4VM3c3oXLTba5Xu3+jM2K31lJTMO8Ii22kt29kMNbxTftU9EffaXJHLORq8sqePl0lTe9NuvxKrEWIxBeeOihUAAAABQABBpjxWTPFRphlsWyS2IrHDkp04qV7U3SvzfQlyadNU+q6L08jFm7y61pk3d3HlSfVeNMCYZCspme6f4EtAJSK5M8L95c3db9eZzcfm0RT0xmnOMXGSdNN+W6fmivbPBwwu4uWmrraTRz587LkWR34uKguv4G8eMh5nxeT7QcNDaeVx/ixT/wDmzr4TtfBk9zPB/DIvrE5fpWsfWf4lbV0dvzXgaLio+G/qfPxzLnrhX8TX1R08OpT9yUJemRMdw9aXEK75bHPnipO1Svmul9aGHsviJcor/vR2Q7A4rnUF6z/RCdTP9Med3D8vmVeKXh+Z3Z+Clj9/JHbpFSk/xSPHn23BZFjjGcm3VvTBfmanVqdrc1lxDcIw2qKpOt2vCzOeXU26Sp1SIO88zWQ7ezFTnK0nGDcbbWz2bXjRz8Pittv3Yq30t2lVl+IkrSrRG1e29bb+fUXz4IpgR0o5Iyp7cr2N1kFE5EcjNsmQxLAAoBAAFAAlECNkybIsWBALFQOqL7y/d2UbVtSdJrUYZI6XVpro1ya8SsJNNNc0bZI6k5t7ybpc1aXu10J6V5fbMv2cf+bD6nT9rOX8q+hXPw6yKEPv5cUYu6pymlfJ+PgdPbnZPFT9l91J1SqWnb1f6Hn6tk5eW+Mtnh+Odv8AN+p3fZroen2z9iuPk21jg/Sbf46S3ZH2c4zFWvh5+qlB/mcdh23fT3cnuHrfZbl8TzpcLlca7nJf8K/U9H7P48mP38WVb/cb+hdax972fHkerL3Tw+B42KS9jJ/42d0u0dqWDPL0jj/1HOtvB7e6nwEv+IXqfoHaeDPkvRw2Tf71R+lnzv8Asfxjyd4+7xpb+1LU/wAP0NzlJ7ZstTi5yXXVy68kaqD6prx9ls6MvAKMnik9WSO+v3dTcVfLkVhwbjd7NyXs6rV8rb6vc9nGzI5WeW/dppKDktKevZJTUunPmc88bbbv+i8DqxcTtOKS5qLbW6cV/UqWDilGiDpzR2OY0glZdxo24eJpkiTRx2BJbhFQoFgBREyIRLAgAAETIISAQnTUqTrenyZ3TxaZabTTqSpp7NpdOXM4Dfgl7TX+WXxpX9UmSrHV3F5Ite9DLhlLpcFki9Xqepx79r5mWThNTT2TuCfS4ala+Vk8Y6lW9JezJ/vKvqeHr3Xo6bOJqsyjtu/ZlN10iqt/iZRN440+avZr4PmvQ8ju2hx+NXbeyk9ld6YKbSrm6fLyZ1Q42FzSbfd05tLaKdO76r08GceuCUpaFUZq311JJXy6JnRgWNJPu1FOeikuWlqCvpVxiuvQ2xXRj7SxtxinJuai1s9tUtKT8Hd2uh18NmU4xmrqSUldXTVnnwlg2loSdXdU1JTbq111bnVwsrSUIuEFsm6ul0ivAMuycklbdJc29keVxHE5Hyh7E2lB1dK/elvt6HZDDGLtylOTeznLVv8A5V+hnKCjF0tvC3t6XyNX0R892jCskpbN2k247t0vwMOGjfwdejOjtLGpZZ06a38qUY8/mjPEqUqW+l1/HR7uF/mOF9uLHDTa623Lzbd2XONSa63W1+NdTXvnR2xhpl5HNpE5tlbA2xzovPKYJkMYDAsgqLWQQBgJGsYorjLhUSxmdG6iyso7kGZU1UESkv7opjE7Oyl+0urSjJv6fmZal5fM3xZYxxuTfvNRj8Hf1M8vSyPYzTVbPk4cvDUm/wACvEN3yTTdL7r/AEZjgktKaVpLZ3d+Zji4yUX7aVTnGEadbu6tP0PH1OG+I7ceWOvHBO6VeNtpr4GTzSxv20nD70U1T802WyZd70N7bpShd+G7RWHE5HG+6jF8njck/Z89Ld/A8/5cnXvjrx8TC3cJX4uG1+vyN48RCqhBu1utGyvxX6HncPNN2+Fx+q9p36aT0P8AGaVtCm+lvb12Ndl+M90+pza1GsUGsrr9pkxOSSfOkubpfQ3xZ7ajdzjduW0Y1tdLm/72OHHxzdx1StXu4Sim34Nrl6FM0bhGEXUlblLls+Y7L8TXq4+JhrnBO5LS5N822n+SOaPG2nqdJN2367GODBUnLx5u1zql+Bz8a3BTlH9zH67muw3HH2j3nevJDZSTTfStk7+Rpgi1z6Td+jjzNlOMsKv3ZR1eGz3OeXH48dRnNO9kkm3S67Hq43+ccrPLx5wqTj4Nr5MSOvPNNqcfdnurXXqjOS8kd9c8cwNnFeBCgimKxiWlHY00FZogwaBaZUqAAKJjKjbFJMwIr4ehFbrKrp7DK63SMHvzp+vMmLrk5L/2QUhkTe7NngvqY3fPQ/VOLJjDw1L+GakvkQJcC31NON4LJOMFFqoxSST3tELJJfvP+bG/yJ/xMuuh/Fx+qJYrHguOyQk45lJxp7qPtf1Np9oYpXHRJ7pxnLZLbnRWXEOnyWz/AH4s4uGjalab38E/zOfLh58LK9XDKc3qUoynFea1Jrna2fxK5MmaKWvGm3Ju4yt6fyZxY4TVuNxbVN927r4GXdZEklWzu3iyNv135GO3l8Njo4rjJJ1BaUven3mmcr6eFERywyaFHI4Nr9o5OUt/Locjx5endre/9xLn8WQo8Rfvwp7NPh09vkXL8Hrzw4tMV39N76td2zphnw3FaotwX3mtmtls92fNrhcjdtwf/QZrh4OV1demJonby+LsfV4+1MNO8i8dN2105HHx3bGHS46ufPS1dfFUefDs5dYp+fd0yvF8DFQb07/yon507kcX2i88O7hFxikovrsinDdmycVKUktPsxUtnRvhnpjH06zS6l+/fRR+cn9Ed+MyM10Txx0qEVUV47tsiOIw72fp6Qf5lHLx1P1kor8C4jXNS67kYr6oyU65KK+cmJTb5tv5RRRvkmlye5EpbWzmXlS/Fj139RgtKVkAFQABUAAQAAAIJAAnU/F/NkAKX08Wk7SapsR4dRutr8K+jQLOZBKbXSL9YoLJL7iI1DWFS8j+4Fkf3P7+Y1k94EE391fJlsa35L5Fe8HeAdWv0+SMs0VJU/ojLvB3hMXVZSd1b22XTb4Ea34v5shg0hYAAAAIAAAAAAAKAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAEH/2Q=="
                alt="client"
                className="image6"
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="client"
                className="image6"
              />
            </div>
          </div>

          {/* Reviews container */}
          <div className=" container4">
            <h2>Reviews</h2>
            <div className="rows star">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpXL-egebuz-Rzk1NQ9jrySB4QvdATB3OH2bnJspD&s"
                alt="star"
                className="star"
              />

              <p>5/5</p>
            </div>
            <p4>136 Reviews</p4>
            <div className="rows">
              <img
                src="data:image/jpeg;base64,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"
                alt="name"
                className="image5"
              />
              <div>
                <p className="para3">
                  "Truly a Professional <b>people</b> to get your <b>service</b>{" "}
                  done with them"
                </p>
                <div className="star">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpXL-egebuz-Rzk1NQ9jrySB4QvdATB3OH2bnJspD&s"
                    alt="star"
                    className="star"
                  />
                </div>
              </div>
            </div>
            <div className="rows">
              <img
                src="data:image/jpeg;base64,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"
                alt="name"
                className="image5"
              />
              <div>
                <p className="para3">
                  "The <b>Quality</b> of their work is <b>Impeccable</b> and simply amazing"
                </p>
                <div className="star">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpXL-egebuz-Rzk1NQ9jrySB4QvdATB3OH2bnJspD&s"
                    alt="star"
                    className="star"
                  />
                </div>
              </div>
            </div>
            <div className="rows">
              <img
                src="data:image/jpeg;base64,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"
                alt="name"
                className="image5"
              />
              <div>
                <p className="para3">
                  "Great <b>Ambiance</b>,Fully Equipped,super{" "}
                  <b>Professionals</b>"
                </p>
                <div className="star">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpXL-egebuz-Rzk1NQ9jrySB4QvdATB3OH2bnJspD&s"
                    alt="star"
                    className="star"
                  />
                </div>
              </div>
            </div>
            <a href="hh">View all Reviews</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
