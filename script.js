const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Black Summoner - épisode 10 VOSTFR",
      description: "Vous regardez",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/30c52b8f481041c3e629bbf67c90811e.jpe",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m201.syncusercontent.com/mfs-60:dd25c908b5c32894934265cf7dfc16e4=============================/p/Black%20Summoner%2010.mp4?allowdd=0&datakey=KHqNbkwgcBX9zYKzAdOaoll47/11h+y6HhHJ1NNRpwZbbMhXVbvuUBMD8drO8GZAANXsQUKJ5V6VeiZt7T2vs7BzRzzhcFYH5my6oJcVeF4Ls3HhzTWtFGn1foBIAYp9oKOyDUWlBGgJF7hVcJsyRqgN+4Q17wawSm87GrXyrO6BZ98jftVQ7ESX2DcB3q01ogo6cV8zAX4cePpNfNzb3cE2YLG9A5Ov7Yl0NjxRkxZB9QcOqRKE7ktT5uMI8i/3LKt/t8rzykUFRzzxYISYwoxzjc0oSOgZOunQrlG1dqGaUTyWUE4cweJn1uWZ5P1ilccYhw7YtbSz5s6aV5/3aQ&engine=ln-2.3.7.3&errurl=EsbbO4onG4MPVKkcBunqU4xdRBUykOVg9CI8oRi3BzRAPLOP1IBa6HpuQYRshrU7wNF/Max7a/nTqcpyFnYpl8VVhadpALI5QrOAgQf9oat5hNJoxjNMSlyVm8TGjU6U4USdXkwPlKmBfZbfuxO+ptW+a8/2+mU5evD5hP5vKpT5mFtB/ToHhtcx3ZA7d1EAmcVE5oDe6KZ2HoyJPBmf7RNBfLE8k656Irqhl3zwL9NjtEaN4FHmgRo7+6BShO/jBtcwyCwxt8qQg55UlnCl8M7MMmGD+HDvx1u5cGkC1nDlEiWCTiwhprDEfJ8COIw8Q3cliootL4VP2hBvzcs5qA==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQmxhY2slMjBTdW1tb25lciUyMDEwLm1wNCI7ZmlsZW5hbWUqPVVURi04JydCbGFjayUyMFN1bW1vbmVyJTIwMTAubXA0Ow&ipaddress=1458994159&linkcachekey=2f1490d60&linkoid=1749570005&mode=101&sharelink_id=11780663230005&timestamp=1672578074539&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=c60be3828a426f0e29071001a2448333f3f20911&cachekey=60:dd25c908b5c32894934265cf7dfc16e4=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "https://cdn.jwplayer.com/strips/iYfADWO1-120.vtt",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
