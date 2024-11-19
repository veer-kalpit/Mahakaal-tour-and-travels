const Contact = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center  p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className=" mt-4 ">
        <ul className="gap-10 flex flex-col font-Dancing text-[40px]">
          <li>Name :- Ajay Singh Gurjar</li>
          <li>Contact No. :- 8815212323</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="flex flex-row gap-10 self-center justify-center m-10">
            {/* Whatsapp */}
            <li>
              <a
                href="https://wa.me/+918815212323"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                >
                  <path
                    fill="#c7ede6"
                    d="M87.2,56.7c1.1-2.2,1.8-4.6,1.8-7.2c0-6.6-4.2-12.3-10-14.5c0,0,0,0,0,0c0-11.6-9.4-21-21-21 c-9.8,0-18,6.7-20.3,15.8c-1.5-0.5-3-0.8-4.7-0.8c-7.7,0-14,5.8-14.9,13.3C12.9,43.4,9,48,9,53.5C9,59.9,14.1,65,20.5,65 c0.2,0,0.4,0,0.5,0c0,0.2,0,0.3,0,0.5C21,76.8,30.2,86,41.5,86c6.4,0,12.2-3,15.9-7.6c2.2,2.2,5.2,3.6,8.6,3.6 c4.7,0,8.7-2.7,10.7-6.5c1.1,0.3,2.2,0.5,3.3,0.5c6.1,0,11-4.9,11-11C91,61.7,89.5,58.7,87.2,56.7z"
                  ></path>
                  <path
                    fill="#fdfcef"
                    d="M76.5,70.5V71h3v-0.5c0,0,4.2,0,5.5,0c2.5,0,4.5-2,4.5-4.5c0-2.3-1.8-4.2-4.1-4.5c0-0.2,0.1-0.4,0.1-0.5 c0-2.5-2-4.5-4.5-4.5c-1.4,0-2.7,0.7-3.5,1.7c-0.1-2.6-2.3-4.7-5-4.7c-2.8,0-5,2.2-5,5c0,0.4,0.1,0.9,0.2,1.3 C67,59,66.1,58.5,65,58.5c-1.8,0-3.2,1.3-3.5,3.1c-0.2,0-0.4-0.1-0.5-0.1c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5s9.5,0,9.5,0H76.5z"
                  ></path>
                  <path
                    fill="#472b29"
                    d="M72.5,53c-3,0-5.5,2.5-5.5,5.5c0,0,0,0,0,0c-0.6-0.4-1.3-0.5-2-0.5c-1.8,0-3.4,1.3-3.9,3c0,0-0.1,0-0.1,0 c-2.8,0-5,2.2-5,5c0,2.8,2.2,5,5,5h15.5c0.3,0,0.5-0.2,0.5-0.5S76.8,70,76.5,70H61c-2.2,0-4-1.8-4-4s1.8-4,4-4c0.1,0,0.2,0,0.3,0 l0.1,0c0,0,0,0,0.1,0c0.2,0,0.5-0.2,0.5-0.4c0.2-1.5,1.5-2.6,3-2.6c0.9,0,1.7,0.4,2.3,1.1c0.1,0.1,0.2,0.2,0.4,0.2 c0.1,0,0.2,0,0.2-0.1c0.2-0.1,0.3-0.3,0.3-0.6c-0.1-0.4-0.2-0.8-0.2-1.2c0-2.5,2-4.5,4.5-4.5c2.4,0,4.3,1.9,4.5,4.3 c0,0.2,0.2,0.4,0.3,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.3-0.1,0.4-0.2c0.8-1,1.9-1.5,3.1-1.5c2.2,0,4,1.8,4,4c0,0.1,0,0.2,0,0.3l0,0.1 c0,0.1,0,0.3,0.1,0.4s0.2,0.2,0.3,0.2c2.1,0.2,3.6,1.9,3.6,4c0,2.2-1.8,4-4,4h-5.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H85 c2.8,0,5-2.2,5-5c0-2.4-1.7-4.4-4-4.9c0,0,0-0.1,0-0.1c0-2.8-2.2-5-5-5c-1.2,0-2.3,0.4-3.2,1.2C77.2,54.8,75.1,53,72.5,53L72.5,53 z"
                  ></path>
                  <path
                    fill="#472b29"
                    d="M71 60c-1.4 0-2.6 1-2.9 2.3-.4-.2-.8-.3-1.2-.3-1.2 0-2.2.9-2.4 2.1-.2 0-.4-.1-.6-.1-1.5 0-2.8 1.2-2.9 2.7 0 .1.1.3.2.3 0 0 0 0 0 0 .1 0 .2-.1.2-.2.1-1.3 1.2-2.3 2.4-2.3.2 0 .5 0 .7.1 0 0 0 0 .1 0 .1 0 .1 0 .2-.1.1 0 .1-.1.1-.2 0-1 .8-1.9 1.9-1.9.4 0 .9.2 1.2.5 0 0 .1.1.2.1 0 0 .1 0 .1 0 .1 0 .1-.1.2-.2.1-1.3 1.2-2.3 2.5-2.3.2 0 .4 0 .7.1 0 0 0 0 .1 0 .1 0 .2-.1.2-.2 0-.1 0-.3-.2-.3C71.5 60 71.3 60 71 60L71 60zM84.9 61.5c-1.3 0-2.5.9-2.9 2.2 0 .1 0 .3.2.3 0 0 0 0 .1 0 .1 0 .2-.1.2-.2.3-1.1 1.3-1.8 2.4-1.8.1 0 .2 0 .3 0 0 0 0 0 0 0 .1 0 .2-.1.2-.2 0-.1-.1-.3-.2-.3C85.2 61.5 85 61.5 84.9 61.5L84.9 61.5z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M33.5 80h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5S33.8 80 33.5 80zM36.5 80h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S36.8 80 36.5 80zM41.5 82h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5S41.8 82 41.5 82zM30.5 82h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S30.8 82 30.5 82zM27.5 82h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S27.8 82 27.5 82zM33.5 84h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S33.8 84 33.5 84zM36.5 75c-.2 0-.8 0-1 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 .8 0 1 0 .3 0 .5-.2.5-.5S36.8 75 36.5 75zM36.5 77c-.2 0-4.8 0-5 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 4.8 0 5 0 .3 0 .5-.2.5-.5S36.8 77 36.5 77zM41.5 79c-.2 0-2.8 0-3 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 2.8 0 3 0 .3 0 .5-.2.5-.5S41.8 79 41.5 79z"
                  ></path>
                  <g>
                    <path
                      fill="#fff"
                      d="M72.5 24h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5S72.8 24 72.5 24zM76.5 24h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S76.8 24 76.5 24zM81.5 26h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5S81.8 26 81.5 26zM69.5 26h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S69.8 26 69.5 26zM66.5 26h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S66.7 26 66.5 26zM75.5 22h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5S75.8 22 75.5 22zM72.5 28h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S72.8 28 72.5 28z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#add4a1"
                      d="M52.5,26C39.5,26,29,36.5,29,49.5c0,4.5,1.2,8.6,3.4,12.2L29,72.1l10.1-3.3c3.8,2.7,8.4,4.2,13.4,4.2 C65.5,73,76,62.5,76,49.5S65.5,26,52.5,26z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M52.5,73.7c-4.9,0-9.5-1.4-13.5-4.1l-9.7,3.2c-0.3,0.1-0.5,0-0.7-0.2c-0.2-0.2-0.3-0.5-0.2-0.7l3.3-10.1 c-2.2-3.7-3.3-7.9-3.3-12.3c0-13.3,10.9-24.2,24.2-24.2s24.2,10.9,24.2,24.2S65.8,73.7,52.5,73.7z M39.1,68.1c0.1,0,0.3,0,0.4,0.1 c3.8,2.7,8.3,4.1,13,4.1c12.6,0,22.8-10.2,22.8-22.8c0-12.6-10.2-22.8-22.8-22.8c-12.6,0-22.8,10.2-22.8,22.8 c0,4.2,1.1,8.3,3.3,11.8c0.1,0.2,0.1,0.4,0.1,0.6L30.1,71l8.7-2.9C38.9,68.1,39,68.1,39.1,68.1z"
                    ></path>
                  </g>
                  <path
                    fill="#5aba9e"
                    d="M67.6,38.1c-3.5-4.5-8.9-7.5-15.1-7.5c-10.4,0-18.9,8.5-18.9,18.9c0,3.9,1.2,7.6,3.3,10.6l-2,6.2l6-1.9 c3.2,2.5,7.3,4.1,11.7,4.1c10.4,0,18.9-8.5,18.9-18.9c0-1.1-0.1-2.1-0.3-3.2"
                  ></path>
                  <path
                    fill="#472b29"
                    d="M52.5,68.9c-4.3,0-8.4-1.4-11.8-4L35,66.8c-0.2,0.1-0.4,0-0.5-0.1c-0.1-0.1-0.2-0.3-0.1-0.5l1.9-6 c-2.1-3.2-3.2-6.9-3.2-10.7c0-10.7,8.7-19.4,19.4-19.4c6.1,0,11.8,2.8,15.5,7.7c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.2-0.5,0.1-0.7-0.1 c-3.5-4.6-8.9-7.3-14.7-7.3c-10.1,0-18.4,8.3-18.4,18.4c0,3.7,1.1,7.3,3.2,10.3c0.1,0.1,0.1,0.3,0.1,0.4l-1.7,5.3l5-1.6 c0.2-0.1,0.3,0,0.5,0.1c3.3,2.6,7.2,4,11.4,4c10.1,0,18.4-8.3,18.4-18.4c0-1-0.1-2.1-0.3-3.1c0-0.3,0.1-0.5,0.4-0.6 c0.3,0,0.5,0.1,0.6,0.4c0.2,1.1,0.3,2.2,0.3,3.2C71.9,60.2,63.2,68.9,52.5,68.9z"
                  ></path>
                  <g>
                    <path
                      fill="#5aba9e"
                      d="M70.5,43.6c-0.4-1.1-0.9-2.2-1.4-3.3"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M70.5,44.1c-0.2,0-0.4-0.1-0.5-0.3c-0.4-1.1-0.8-2.2-1.4-3.2c-0.1-0.2,0-0.5,0.2-0.7c0.2-0.1,0.5,0,0.7,0.2 c0.6,1.1,1.1,2.2,1.5,3.3c0.1,0.3-0.1,0.5-0.3,0.6C70.6,44.1,70.5,44.1,70.5,44.1z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#fdfcee"
                      d="M60.1,59.6c-1.4,0-3.4-0.5-6.3-1.7c-3.8-1.5-7.6-4.6-10.7-8.8l-0.2-0.2c-0.9-1.2-2.5-3.6-2.5-6 c-0.1-1.8,0.7-3.6,2.2-4.8c0.5-0.4,1.2-0.6,1.8-0.6l0.2,0l0.7,0c0,0,0.1,0,0.2,0s0.1,0,0.2,0c0.1,0,0.2,0.1,0.3,0.2 c0.2,0.2,0.3,0.4,0.4,0.7l0.8,1.7c0.6,1.4,1.1,2.5,1.2,2.7c0.1,0.1,0.3,0.5,0.1,0.9c-0.2,0.3-0.4,0.6-0.6,0.8 c-0.1,0.2-0.2,0.3-0.4,0.4l-0.1,0.1c-0.1,0.1-0.4,0.4-0.6,0.6c-0.5,0.5-0.6,1.1-0.3,1.6c1,1.6,2.2,3,3.7,4.2 c1.5,1.3,3.2,2.3,5.1,3l0.2,0.1c0.2,0.1,0.5,0.2,0.8,0.2c0.5,0,0.9-0.2,1.2-0.5c0.5-0.5,1-1.2,1.5-1.8l0.3-0.4 c0.1-0.1,0.3-0.4,0.7-0.4c0.1,0,0.3,0,0.4,0.1c0.5,0.2,3.3,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0.2,0.1,0.3,0.2,0.3,0.4 c0,0.9-0.1,1.7-0.4,2.5c-0.5,1.2-2.5,2.4-4.1,2.7C61,59.5,60.6,59.6,60.1,59.6z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M45.4,38c0.1,0,0.1,0,0.2,0c0.1,0.1,0.2,0.3,0.3,0.5l0.6,1.3c0.8,1.7,1.3,3,1.4,3.2s0.1,0.3,0.1,0.4 c-0.1,0.3-0.3,0.5-0.5,0.7l-0.1,0.1c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.4,0.4-0.6,0.6c-0.7,0.6-0.8,1.5-0.3,2.2 c1,1.6,2.3,3.1,3.8,4.3c1.5,1.3,3.3,2.3,5.2,3l0.2,0.1c0.3,0.1,0.6,0.2,0.9,0.2c0.6,0,1.2-0.2,1.6-0.6c0.5-0.6,1.1-1.2,1.5-1.8 l0.3-0.4c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0,0.3,0.1c0.5,0.2,3.2,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0,0.8-0.1,1.6-0.4,2.3 c-0.4,1.1-2.2,2.1-3.7,2.4c-0.3,0.1-0.6,0.1-1.1,0.1c-1,0-2.7-0.3-6.2-1.6c-3.7-1.4-7.5-4.5-10.5-8.6l-0.2-0.2 c-0.9-1.2-2.4-3.4-2.4-5.7c-0.1-1.7,0.7-3.3,2-4.5c0.4-0.3,1-0.5,1.5-0.5c0,0,0.1,0,0.1,0c0.3,0,0.5,0,0.7,0 C45.2,38,45.3,38,45.4,38 M45.4,37c-0.1,0-0.1,0-0.2,0h-0.6c-0.1,0-0.1,0-0.2,0c-0.8,0-1.5,0.3-2.1,0.7c0,0,0,0,0,0 c-1.6,1.3-2.4,3.3-2.4,5.2c0,2.5,1.7,5,2.7,6.3l0.2,0.2c3.1,4.2,7,7.4,10.9,8.9c3,1.2,5.1,1.7,6.5,1.7c0.6,0,1-0.1,1.3-0.1 c1.7-0.3,3.9-1.5,4.4-3c0.3-0.8,0.5-1.8,0.5-2.7c0-0.4-0.3-0.7-0.6-0.9l-0.5-0.2L64.8,53c-0.9-0.4-3.8-1.8-4.4-2 c-0.1,0-0.3-0.1-0.6-0.1c-0.7,0-1,0.5-1.1,0.6l-0.3,0.4c-0.5,0.6-0.9,1.2-1.4,1.7c-0.2,0.2-0.5,0.3-0.9,0.3c-0.2,0-0.4,0-0.5-0.1 l-0.2-0.1c-1.8-0.7-3.5-1.6-4.9-2.9c-1.4-1.2-2.6-2.6-3.6-4.1c-0.2-0.3-0.1-0.7,0.1-0.9c0,0,0.1-0.1,0.1-0.1 c0.2-0.2,0.4-0.4,0.5-0.6l0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.3-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.3-0.8-0.1-1.4 c-0.1-0.2-0.6-1.3-1.2-2.6l-0.2-0.5l-0.6-1.3c-0.1-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.4-0.3-0.6-0.3C45.5,37,45.4,37,45.4,37L45.4,37 z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#fdfcef"
                      d="M32.5,56.5c0,0,1.6,0,3.5,0s3.5-1.6,3.5-3.5c0-1.8-1.3-3.2-3.1-3.5c0-0.2,0.1-0.4,0.1-0.5 c0-1.9-1.6-3.5-3.5-3.5c-1,0-2,0.5-2.6,1.2c-0.4-1.8-2-3.2-3.9-3.2c-2.2,0-4,1.8-4,4c0,0.2,0,0.4,0.1,0.6c-0.4-0.3-1-0.6-1.6-0.6 c-1.2,0-2.2,0.9-2.5,2.1c-0.2,0-0.4-0.1-0.5-0.1c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s7.5,0,7.5,0V57h7V56.5z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M34.3 52c-.1 0-.3-.1-.3-.3 0-1.2 1-2.2 2.2-2.2 0 0 .7 0 1.2.1.1 0 .2.2.2.3 0 .1-.2.2-.3.2C36.9 50 36.2 50 36.2 50c-.9 0-1.7.8-1.7 1.7C34.5 51.9 34.4 52 34.3 52zM27.5 56A.5.5 0 1 0 27.5 57 .5.5 0 1 0 27.5 56z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M36,57h-3.5c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H36c1.7,0,3-1.3,3-3c0-1.5-1.1-2.8-2.6-3 c-0.1,0-0.3-0.1-0.3-0.2s-0.1-0.2-0.1-0.4c0-0.2,0-0.3,0-0.5c0-1.7-1.3-3-3-3c-0.8,0-1.6,0.4-2.2,1c-0.1,0.1-0.3,0.2-0.5,0.1 c-0.2,0-0.3-0.2-0.4-0.4c-0.3-1.6-1.8-2.8-3.4-2.8c-1.9,0-3.5,1.6-3.5,3.5c0,0.1,0,0.3,0,0.4c0,0.2-0.1,0.4-0.2,0.5 s-0.4,0.1-0.6,0C21.9,48.2,21.4,48,21,48c-1,0-1.8,0.7-2,1.6c0,0.3-0.3,0.4-0.6,0.4c-0.2,0-0.3,0-0.5,0c-1.7,0-3,1.3-3,3 s1.3,3,3,3h7.5c0.3,0,0.5,0.2,0.5,0.5S25.8,57,25.5,57H18c-2.2,0-4-1.8-4-4s1.8-4,4-4c0.1,0,0.1,0,0.2,0c0.4-1.2,1.5-2,2.8-2 c0.3,0,0.7,0.1,1,0.2c0.2-2.3,2.1-4.2,4.5-4.2c1.8,0,3.5,1.1,4.2,2.8c0.7-0.5,1.5-0.8,2.3-0.8c2.2,0,4,1.8,4,4c0,0,0,0.1,0,0.1 c1.7,0.4,3,2,3,3.9C40,55.2,38.2,57,36,57z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M30.5,56c-0.2,0-0.8,0-1,0c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5c0.2,0,0.8,0,1,0c0.3,0,0.5-0.2,0.5-0.5 S30.8,56,30.5,56z"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
            {/* Instagram  */}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              >
                <path
                  fill="#c7ede6"
                  d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478 C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29 c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022 C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82 c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"
                ></path>
                <path
                  fill="#fff"
                  d="M15.405,51H5.5C5.224,51,5,50.776,5,50.5S5.224,50,5.5,50h9.905c0.276,0,0.5,0.224,0.5,0.5 S15.682,51,15.405,51z"
                ></path>
                <path
                  fill="#fff"
                  d="M18.5,51h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S18.777,51,18.5,51z"
                ></path>
                <path
                  fill="#fff"
                  d="M23.491,53H14.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.991c0.276,0,0.5,0.224,0.5,0.5 S23.767,53,23.491,53z"
                ></path>
                <path
                  fill="#fff"
                  d="M12.5,53h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S12.777,53,12.5,53z"
                ></path>
                <path
                  fill="#fff"
                  d="M9.5,53h-2C7.224,53,7,52.776,7,52.5S7.224,52,7.5,52h2c0.276,0,0.5,0.224,0.5,0.5S9.777,53,9.5,53 z"
                ></path>
                <path
                  fill="#fff"
                  d="M15.5,55h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S15.776,55,15.5,55z"
                ></path>
                <path
                  fill="#fff"
                  d="M18.5,46c-0.177,0-0.823,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,0.823,0,1,0c0.276,0,0.5-0.224,0.5-0.5C19,46.224,18.776,46,18.5,46z"
                ></path>
                <path
                  fill="#fff"
                  d="M18.5,48c-0.177,0-4.823,0-5,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,4.823,0,5,0c0.276,0,0.5-0.224,0.5-0.5C19,48.224,18.776,48,18.5,48z"
                ></path>
                <path
                  fill="#fff"
                  d="M23.5,50c-0.177,0-2.823,0-3,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,2.823,0,3,0c0.276,0,0.5-0.224,0.5-0.5C24,50.224,23.776,50,23.5,50z"
                ></path>
                <path
                  fill="#fff"
                  d="M85.5,46h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S85.776,46,85.5,46z"
                ></path>
                <path
                  fill="#fff"
                  d="M89.5,46h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S89.776,46,89.5,46z"
                ></path>
                <path
                  fill="#fff"
                  d="M94.5,48h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S94.777,48,94.5,48z"
                ></path>
                <path
                  fill="#fff"
                  d="M82.5,48h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S82.776,48,82.5,48z"
                ></path>
                <path
                  fill="#fff"
                  d="M79.375,48H77.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.875c0.276,0,0.5,0.224,0.5,0.5 S79.651,48,79.375,48z"
                ></path>
                <path
                  fill="#fff"
                  d="M88.5,44h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5 S88.777,44,88.5,44z"
                ></path>
                <path
                  fill="#fff"
                  d="M85.5,50h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S85.776,50,85.5,50z"
                ></path>
                <path
                  fill="#fdfcef"
                  d="M43.875,32.5c0,0,3.64,0,6.125,0s4.5-2.015,4.5-4.5c0-2.333-1.782-4.229-4.055-4.455 C50.467,23.364,50.5,23.187,50.5,23c0-2.485-2.015-4.5-4.5-4.5c-1.438,0-2.703,0.686-3.527,1.736 C42.333,17.6,40.171,15.5,37.5,15.5c-2.761,0-5,2.239-5,5c0,0.446,0.077,0.87,0.187,1.282C32.045,21.005,31.086,20.5,30,20.5 c-1.781,0-3.234,1.335-3.455,3.055C26.364,23.533,26.187,23.5,26,23.5c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5s9.5,0,9.5,0 h5.375V33h3V32.5z"
                ></path>
                <path
                  fill="#472b29"
                  d="M37.5,15c-3.033,0-5.5,2.467-5.5,5.5c0,0.016,0,0.031,0,0.047C31.398,20.192,30.71,20,30,20 c-1.831,0-3.411,1.261-3.858,3.005C26.095,23.002,26.048,23,26,23c-2.757,0-5,2.243-5,5s2.243,5,5,5h14.875 c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H26c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.117,0,0.23,0.017,0.343,0.032l0.141,0.019 c0.021,0.003,0.041,0.004,0.062,0.004c0.246,0,0.462-0.185,0.495-0.437C27.232,22.125,28.504,21,30,21 c0.885,0,1.723,0.401,2.301,1.1c0.098,0.118,0.241,0.182,0.386,0.182c0.078,0,0.156-0.018,0.228-0.056 c0.209-0.107,0.314-0.346,0.254-0.573C33.054,21.218,33,20.852,33,20.5c0-2.481,2.019-4.5,4.5-4.5 c2.381,0,4.347,1.872,4.474,4.263c0.011,0.208,0.15,0.387,0.349,0.45c0.05,0.016,0.101,0.024,0.152,0.024 c0.15,0,0.296-0.069,0.392-0.192C43.638,19.563,44.779,19,46,19c2.206,0,4,1.794,4,4c0,0.117-0.017,0.23-0.032,0.343l-0.019,0.141 c-0.016,0.134,0.022,0.268,0.106,0.373c0.084,0.105,0.207,0.172,0.34,0.185C52.451,24.247,54,25.949,54,28c0,2.206-1.794,4-4,4 h-6.125c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H50c2.757,0,5-2.243,5-5c0-2.397-1.689-4.413-4.003-4.877 C50.999,23.082,51,23.041,51,23c0-2.757-2.243-5-5-5c-1.176,0-2.293,0.416-3.183,1.164C42.219,16.76,40.055,15,37.5,15L37.5,15z"
                ></path>
                <path
                  fill="#472b29"
                  d="M36,22c-1.403,0-2.609,0.999-2.913,2.341C32.72,24.119,32.301,24,31.875,24 c-1.202,0-2.198,0.897-2.353,2.068C29.319,26.022,29.126,26,28.937,26c-1.529,0-2.811,1.2-2.918,2.732 C26.01,28.87,26.114,28.99,26.251,29c0.006,0,0.012,0,0.018,0c0.13,0,0.24-0.101,0.249-0.232c0.089-1.271,1.151-2.268,2.419-2.268 c0.229,0,0.47,0.042,0.738,0.127c0.022,0.007,0.045,0.01,0.067,0.01c0.055,0,0.11-0.02,0.156-0.054 C29.962,26.537,30,26.455,30,26.375c0-1.034,0.841-1.875,1.875-1.875c0.447,0,0.885,0.168,1.231,0.473 c0.047,0.041,0.106,0.063,0.165,0.063c0.032,0,0.063-0.006,0.093-0.019c0.088-0.035,0.148-0.117,0.155-0.212 C33.623,23.512,34.712,22.5,36,22.5c0.208,0,0.425,0.034,0.682,0.107c0.023,0.007,0.047,0.01,0.07,0.01 c0.109,0,0.207-0.073,0.239-0.182c0.038-0.133-0.039-0.271-0.172-0.309C36.517,22.04,36.256,22,36,22L36,22z"
                ></path>
                <path
                  fill="#472b29"
                  d="M49.883,23.5c-1.326,0-2.508,0.897-2.874,2.182c-0.038,0.133,0.039,0.271,0.172,0.309 C47.205,25.997,47.228,26,47.25,26c0.109,0,0.209-0.072,0.24-0.182C47.795,24.748,48.779,24,49.883,24 c0.117,0,0.23,0.014,0.342,0.029c0.012,0.002,0.023,0.003,0.035,0.003c0.121,0,0.229-0.092,0.246-0.217 c0.019-0.137-0.077-0.263-0.214-0.281C50.158,23.516,50.022,23.5,49.883,23.5L49.883,23.5z"
                ></path>
                <path
                  fill="#3231c7"
                  d="M72.3,35.7v30.6c0,3.31-2.69,6-6,6H35.7c-3.31,0-6-2.69-6-6V35.7c0-3.31,2.69-6,6-6h30.6 C69.61,29.7,72.3,32.39,72.3,35.7z"
                ></path>
                <path
                  fill="#7228ad"
                  d="M72.3,47.25V66.3c0,3.31-2.69,6-6,6H35.7c-3.31,0-6-2.69-6-6V35.7c0-3.31,2.69-6,6-6h19.05 C61.99,33.95,68.05,40.01,72.3,47.25z"
                ></path>
                <path
                  fill="#b11e93"
                  d="M70.96,70.08c-1.1,1.35-2.78,2.22-4.66,2.22H35.7c-3.31,0-6-2.69-6-6V35.7 c0-1.88,0.87-3.56,2.22-4.66C53.03,32.02,69.98,48.97,70.96,70.08z"
                ></path>
                <path
                  fill="#db1a58"
                  d="M63,72v0.3H35.7c-3.31,0-6-2.69-6-6V39H30C48.23,39,63,53.77,63,72z"
                ></path>
                <path
                  fill="#e4273e"
                  d="M55,72c0,0.1,0,0.2-0.01,0.3H35.7c-3.31,0-6-2.69-6-6V47.01C29.8,47,29.9,47,30,47 C43.81,47,55,58.19,55,72z"
                ></path>
                <path
                  fill="#f47c22"
                  d="M48,72c0,0.1,0,0.2-0.01,0.3H35.7c-3.31,0-6-2.69-6-6V54.01C29.8,54,29.9,54,30,54 C39.94,54,48,62.06,48,72z"
                ></path>
                <path
                  fill="#ef9922"
                  d="M42,72c0,0.1,0,0.2-0.01,0.3H35.7c-3.31,0-6-2.69-6-6v-6.29C29.8,60,29.9,60,30,60 C36.63,60,42,65.37,42,72z"
                ></path>
                <path
                  fill="#472b29"
                  d="M66.3,73H35.7c-3.694,0-6.7-3.006-6.7-6.7V35.7c0-3.694,3.006-6.7,6.7-6.7h30.6 c3.694,0,6.7,3.006,6.7,6.7v30.6C73,69.994,69.994,73,66.3,73z M35.7,30.4c-2.923,0-5.3,2.377-5.3,5.3v30.6 c0,2.922,2.377,5.3,5.3,5.3h30.6c2.923,0,5.3-2.377,5.3-5.3V35.7c0-2.922-2.377-5.3-5.3-5.3H35.7z"
                ></path>
                <path
                  fill="#fff"
                  d="M50.99,66.5c-3.983,0-5.466-0.011-6.98-0.08c-1.393-0.062-2.479-0.272-3.52-0.68 c-1.014-0.391-1.806-0.906-2.57-1.67c-0.759-0.759-1.273-1.552-1.67-2.57c-0.396-1.013-0.606-2.098-0.68-3.52 c-0.069-1.527-0.08-3.008-0.08-6.98c0-3.965,0.011-5.443,0.08-6.97c0.062-1.393,0.271-2.479,0.68-3.52 c0.396-1.027,0.911-1.82,1.67-2.57c0.759-0.758,1.552-1.273,2.57-1.67c1.041-0.407,2.127-0.617,3.52-0.68 c1.566-0.071,3.067-0.09,6.98-0.09c3.915,0,5.413,0.019,6.97,0.09c1.393,0.063,2.479,0.272,3.521,0.68 c1.027,0.396,1.819,0.911,2.569,1.67c0.752,0.743,1.27,1.535,1.681,2.57c0.399,1.052,0.606,2.139,0.67,3.521 c0.07,1.581,0.09,3.08,0.09,6.97c0,3.898-0.02,5.398-0.09,6.98c-0.063,1.382-0.27,2.468-0.67,3.52 c-0.41,1.025-0.929,1.819-1.681,2.57c-0.748,0.757-1.537,1.272-2.56,1.67c-1.055,0.408-2.144,0.617-3.53,0.68 C56.445,66.489,54.965,66.5,50.99,66.5z M49.68,38.5c-2.751,0-4.262,0.021-5.573,0.079c-1.334,0.062-2.069,0.285-2.562,0.472 c-0.609,0.239-1.046,0.524-1.508,0.987c-0.461,0.46-0.746,0.895-0.982,1.499c-0.188,0.494-0.413,1.23-0.476,2.569 c-0.068,1.505-0.079,2.893-0.079,6.884c0,3.999,0.011,5.389,0.079,6.893c0.062,1.329,0.286,2.064,0.474,2.556 c0.239,0.621,0.514,1.043,0.979,1.508c0.468,0.459,0.906,0.743,1.514,0.982c0.476,0.186,1.195,0.408,2.56,0.472 c1.559,0.07,3.038,0.089,6.886,0.089c3.855,0,5.337-0.02,6.893-0.089c1.397-0.064,2.134-0.301,2.566-0.474 c0.599-0.231,1.033-0.512,1.497-0.967c0.46-0.469,0.746-0.908,0.989-1.516c0.185-0.483,0.402-1.208,0.466-2.559 c0.069-1.572,0.089-3.054,0.089-6.895c0-3.834-0.02-5.313-0.089-6.884c-0.063-1.349-0.281-2.074-0.464-2.555 c-0.236-0.612-0.52-1.049-0.979-1.508c-0.493-0.484-0.893-0.742-1.53-0.985c-0.461-0.184-1.17-0.404-2.544-0.469 c-1.534-0.07-3.017-0.089-6.895-0.089H49.68z"
                ></path>
                <path
                  fill="#472b29"
                  d="M50.99,35.8c3.909,0,5.405,0.019,6.956,0.09c1.359,0.061,2.415,0.265,3.428,0.66 c0.985,0.38,1.744,0.873,2.467,1.605c0.719,0.71,1.216,1.47,1.608,2.459c0.389,1.024,0.59,2.081,0.652,3.429 c0.07,1.576,0.089,3.072,0.089,6.957c0,3.893-0.019,5.39-0.089,6.966c-0.062,1.35-0.263,2.407-0.648,3.42 c-0.396,0.989-0.894,1.751-1.617,2.474c-0.716,0.725-1.473,1.219-2.453,1.6c-1.023,0.395-2.083,0.599-3.436,0.66 c-1.509,0.069-2.986,0.08-6.956,0.08c-3.978,0-5.458-0.011-6.967-0.08c-1.359-0.061-2.415-0.264-3.426-0.66 c-0.971-0.375-1.731-0.869-2.465-1.602c-0.728-0.729-1.222-1.489-1.603-2.468c-0.384-0.981-0.587-2.038-0.659-3.423 c-0.069-1.522-0.08-3.001-0.08-6.968c0-3.959,0.011-5.436,0.08-6.957c0.061-1.359,0.264-2.415,0.66-3.427 c0.38-0.985,0.873-1.745,1.603-2.465c0.727-0.727,1.488-1.221,2.467-1.602c1.009-0.394,2.065-0.598,3.424-0.66 C45.585,35.819,47.082,35.8,50.99,35.8 M50.99,63.79c3.861,0,5.345-0.019,6.907-0.089c1.443-0.067,2.211-0.314,2.658-0.493 c0.641-0.248,1.105-0.547,1.609-1.041c0.487-0.497,0.791-0.964,1.053-1.62c0.191-0.501,0.419-1.255,0.483-2.649 c0.07-1.576,0.089-3.061,0.089-6.908c0-3.839-0.019-5.322-0.089-6.898c-0.065-1.391-0.292-2.145-0.483-2.65 c-0.249-0.645-0.562-1.126-1.049-1.614c-0.518-0.509-0.96-0.794-1.625-1.048c-0.486-0.194-1.225-0.425-2.645-0.492 c-1.539-0.07-3.024-0.089-6.907-0.089H49.68c-2.756,0-4.27,0.021-5.588,0.079c-1.376,0.064-2.141,0.296-2.658,0.493 c-0.641,0.251-1.122,0.566-1.609,1.053c-0.487,0.486-0.801,0.965-1.051,1.605c-0.197,0.513-0.431,1.28-0.495,2.662 c-0.069,1.511-0.08,2.901-0.08,6.898c0,4.004,0.01,5.397,0.08,6.907c0.064,1.372,0.297,2.136,0.493,2.65 c0.252,0.654,0.556,1.121,1.05,1.615c0.491,0.482,0.973,0.795,1.613,1.046c0.496,0.194,1.247,0.426,2.656,0.492 C45.655,63.771,47.138,63.79,50.99,63.79 M50.99,35.3c-3.991,0-5.454,0.021-6.989,0.09c-1.417,0.064-2.522,0.279-3.583,0.693 c-1.047,0.408-1.86,0.937-2.639,1.714c-0.78,0.771-1.31,1.585-1.716,2.639c-0.416,1.062-0.63,2.168-0.693,3.584 c-0.069,1.537-0.08,3.019-0.08,6.979c0,3.969,0.011,5.452,0.08,6.99c0.075,1.444,0.289,2.549,0.693,3.583 c0.407,1.045,0.937,1.859,1.715,2.639c0.786,0.786,1.601,1.314,2.639,1.715c1.062,0.416,2.168,0.63,3.584,0.693 c1.537,0.07,3.02,0.081,6.989,0.081c3.96,0,5.441-0.01,6.979-0.081c1.41-0.063,2.519-0.277,3.594-0.693 c1.051-0.409,1.861-0.938,2.629-1.715c0.771-0.771,1.303-1.584,1.726-2.64c0.409-1.075,0.619-2.18,0.684-3.583 c0.068-1.536,0.09-3,0.09-6.989c0-3.979-0.021-5.443-0.09-6.979c-0.064-1.402-0.274-2.506-0.685-3.585 c-0.421-1.062-0.953-1.876-1.724-2.637c-0.771-0.78-1.584-1.309-2.639-1.716c-1.063-0.416-2.169-0.629-3.585-0.693 C56.443,35.321,54.982,35.3,50.99,35.3L50.99,35.3z M50.99,63.29c-3.842,0-5.32-0.019-6.876-0.089 c-1.336-0.062-2.036-0.278-2.496-0.458c-0.582-0.229-1-0.5-1.445-0.938c-0.441-0.441-0.705-0.846-0.934-1.438 c-0.182-0.476-0.399-1.195-0.46-2.494c-0.068-1.492-0.079-2.881-0.079-6.884c0-3.995,0.011-5.382,0.079-6.875 c0.061-1.308,0.278-2.026,0.462-2.506c0.225-0.574,0.497-0.99,0.938-1.43c0.44-0.441,0.856-0.713,1.438-0.941 c0.473-0.18,1.192-0.399,2.499-0.459C45.42,38.722,46.93,38.7,49.68,38.7h1.311c3.876,0,5.355,0.019,6.885,0.088 c1.346,0.063,2.033,0.277,2.482,0.457c0.612,0.234,0.99,0.478,1.46,0.94c0.436,0.436,0.708,0.854,0.934,1.438 c0.176,0.463,0.389,1.17,0.45,2.493c0.069,1.557,0.089,3.036,0.089,6.875c0,3.847-0.02,5.328-0.089,6.886 c-0.062,1.322-0.273,2.027-0.451,2.494c-0.234,0.586-0.501,0.996-0.943,1.448c-0.445,0.437-0.851,0.7-1.432,0.924 c-0.424,0.169-1.13,0.396-2.501,0.459C56.32,63.271,54.84,63.29,50.99,63.29L50.99,63.29z"
                ></path>
                <path
                  fill="#fff"
                  d="M59.5,40.751c-0.966,0-1.75,0.783-1.75,1.749c0,0.966,0.784,1.75,1.75,1.75s1.75-0.784,1.75-1.75 S60.466,40.75,59.5,40.751L59.5,40.751z"
                ></path>
                <path
                  fill="#472b29"
                  d="M59.5,41c0.828,0,1.5,0.672,1.5,1.5c0,0.828-0.672,1.5-1.5,1.5S58,43.328,58,42.5 C58,41.672,58.672,41.001,59.5,41L59.5,41 M59.5,40.5L59.5,40.5c-1.103,0.001-2,0.898-2,2c0,1.103,0.897,2,2,2s2-0.897,2-2 S60.603,40.5,59.5,40.5L59.5,40.5z"
                ></path>
                <path
                  fill="#fff"
                  d="M50.988,42.504c-4.695,0-8.501,3.806-8.501,8.501s3.806,8.499,8.501,8.499 c4.695,0,8.499-3.805,8.499-8.499S55.682,42.504,50.988,42.504L50.988,42.504z M50.988,45.505c3.037,0,5.5,2.462,5.5,5.5 c0,3.037-2.463,5.5-5.5,5.5c-3.038,0-5.5-2.463-5.5-5.5C45.488,47.967,47.95,45.505,50.988,45.505z"
                ></path>
                <path
                  fill="#472b29"
                  d="M50.988,59.754c-4.825,0-8.751-3.925-8.751-8.75c0-4.825,3.926-8.75,8.751-8.75 c4.824,0,8.749,3.925,8.749,8.75C59.737,55.829,55.812,59.754,50.988,59.754z M50.988,42.754c-4.55,0-8.251,3.701-8.251,8.25 c0,4.549,3.701,8.25,8.251,8.25c4.549,0,8.249-3.701,8.249-8.25C59.237,46.455,55.537,42.754,50.988,42.754z M50.988,56.754 c-3.171,0-5.75-2.58-5.75-5.75s2.579-5.75,5.75-5.75s5.75,2.58,5.75,5.75S54.159,56.754,50.988,56.754z M50.988,45.754 c-2.895,0-5.25,2.355-5.25,5.25s2.355,5.25,5.25,5.25s5.25-2.355,5.25-5.25S53.883,45.754,50.988,45.754z"
                ></path>
                <g>
                  <path
                    fill="#fdfcef"
                    d="M80.5,76.5c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455 C84.473,69.366,84.5,69.187,84.5,69c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165 c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558C70.128,67.714,69.592,67.5,69,67.5 c-1.228,0-2.245,0.887-2.455,2.055C66.366,69.527,66.187,69.5,66,69.5c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s7.5,0,7.5,0 V77h7V76.5z"
                  ></path>
                  <path
                    fill="#472b29"
                    d="M82.25,72C82.112,72,82,71.888,82,71.75c0-1.223,0.995-2.218,2.218-2.218 c0.034,0.009,0.737-0.001,1.244,0.136c0.133,0.036,0.212,0.173,0.176,0.306c-0.036,0.134-0.173,0.213-0.306,0.176 c-0.444-0.12-1.1-0.12-1.113-0.118c-0.948,0-1.719,0.771-1.719,1.718C82.5,71.888,82.388,72,82.25,72z"
                  ></path>
                  <circle cx="75.5" cy="76.5" r=".5" fill="#472b29"></circle>
                  <path
                    fill="#472b29"
                    d="M84,77h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H84c1.654,0,3-1.346,3-3 c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377C83.975,69.314,84,69.16,84,69 c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148c-0.182-0.049-0.321-0.195-0.36-0.379 C77.58,65.165,76.141,64,74.5,64c-1.93,0-3.5,1.57-3.5,3.5c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54 c-0.179,0.102-0.396,0.118-0.556-0.01C69.878,68.155,69.449,68,69,68c-0.966,0-1.792,0.691-1.963,1.644 c-0.048,0.267-0.296,0.446-0.569,0.405C66.314,70.025,66.16,70,66,70c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5 c0.276,0,0.5,0.224,0.5,0.5S73.776,77,73.5,77H66c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006 C66.588,67.82,67.711,67,69,67c0.349,0,0.689,0.061,1.011,0.18C70.176,64.847,72.126,63,74.5,63c1.831,0,3.466,1.127,4.153,2.774 C79.333,65.276,80.155,65,81,65c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142C86.739,69.59,88,71.169,88,73 C88,75.206,86.206,77,84,77z"
                  ></path>
                  <path
                    fill="#472b29"
                    d="M78.5,76c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.159,0,0.841,0,1,0c0.276,0,0.5-0.224,0.5-0.5C79,76.224,78.776,76,78.5,76z"
                  ></path>
                </g>
              </svg>
            </li>
            {/* Gmail */}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#4caf50"
                  d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                ></path>
                <path
                  fill="#1e88e5"
                  d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                ></path>
                <polygon
                  fill="#e53935"
                  points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                ></polygon>
                <path
                  fill="#c62828"
                  d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                ></path>
                <path
                  fill="#fbc02d"
                  d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                ></path>
              </svg>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
