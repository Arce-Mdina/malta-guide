import React from 'react'

import { useNavigate } from 'react-router-dom'

const Sources = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1 onClick={() => navigate('/')} style={{ cursor: "pointer" }}>Coat of Arms (Landing Page)</h1>
      Wikipedia contributors. “Coat of Arms of Malta.” <span style={{ fontStyle: "italic" }}>Coat of Arms of Malta - Wikipedia</span>, 4 May 2024, en.wikipedia.org/wiki/Coat_of_arms_of_Malta#/media/File:Coat_of_arms_of_Malta.svg.
      <br></br>
      <br></br>
      <h1 onClick={() => navigate('/cities')} style={{ cursor: "pointer" }}>Major Cities Page</h1>
      Images of the 5 major cities: <span style={{ textDecoration: "underline" }}>Off Google's image gallery view of the city when that city's name is typed into Google Search - June 16, 2024. (Links below:)</span>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <ul style={{ textAlign: "left" }}>
          <li><a href="https://www.google.com/search?q=valletta+&sca_esv=7898575184a519fd&sca_upv=1&sxsrf=ADLYWIL7PGd80yRFuo10-r-il3cHPntSNg%3A1718623272858&ei=KBxwZsz_M7-ZhbIP97G6gAc&ved=0ahUKEwjMs7nNwuKGAxW_TEEAHfeYDnAQ4dUDCBA&uact=5&oq=valletta+&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXZhbGxldHRhIDIKECMYgAQYJxiKBTIKEC4YgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEC4YgAQYQxiKBTIQEC4YgAQYQxjHARiKBRivATIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTILEC4YgAQYxwEYrwFIqwNQ9QFY9QFwAXgBkAEAmAFWoAFWqgEBMbgBA8gBAPgBAZgCAqACZMICChAAGLADGNYEGEeYAwCIBgGQBgiSBwEyoAeMEA&sclient=gws-wiz-serp" target="_blank">Valletta</a></li>
          <li><a href="https://www.google.com/search?q=mdina&sca_esv=7898575184a519fd&sca_upv=1&sxsrf=ADLYWIJyhA4D1_Qxd2acCC9gj785WSxc0g%3A1718623435140&ei=yxxwZoKgCKmQhbIPnZOxgAw&ved=0ahUKEwjCseqaw-KGAxUpSEEAHZ1JDMAQ4dUDCBA&uact=5&oq=mdina&gs_lp=Egxnd3Mtd2l6LXNlcnAiBW1kaW5hMgoQLhiABBgnGIoFMhAQLhiABBhDGMcBGIoFGK8BMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQLhiABBhDGMcBGIoFGK8BMhAQLhiABBhDGMcBGIoFGK8BMgoQABiABBhDGIoFMgsQLhiABBjHARivATIFEAAYgAQyFxAuGIAEGIoFGJcFGNwEGN4EGOAE2AEDSLgEUABYtQNwAXgBkAEAmAFSoAHvAqoBATW4AQPIAQD4AQGYAgagApUDqAITwgIHECMYJxjqAsICExAAGIAEGEMYtAIYigUY6gLYAQHCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AECwgIdEC4YgAQY4wQYtAIYxwEYyAMY6QQY6gIYrwHYAQLCAgoQIxiABBgnGIoFwgIKEC4YgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQLhiABBjRAxjHAcICCBAAGIAEGLEDwgIKEAAYgAQYFBiHApgDDLoGBggBEAEYAboGBggCEAEYCLoGBggDEAEYFJIHATagB6pb&sclient=gws-wiz-serp" target="_blank">Mdina</a></li>
          <li><a href="https://www.google.com/search?q=st+julians&sca_esv=7898575184a519fd&sca_upv=1&sxsrf=ADLYWIJGJXhRK5r0Pp20Cf_pjE5HJjvRFg%3A1718623274785&ei=KhxwZsHPL7CnhbIPue2H-AU&gs_ssp=eJzj4tTP1TcwLC_OMTdg9OIqLlHIKs3JTMwrBgBQtQdP&oq=st&gs_lp=Egxnd3Mtd2l6LXNlcnAiAnN0KgIIATIEECMYJzIKEC4YgAQYJxiKBTIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIKEC4YgAQYQxiKBTIKEC4YgAQYQxiKBTIQEC4YgAQYQxjHARiKBRivATIKEAAYgAQYQxiKBTIKEC4YgAQYQxiKBTIKEAAYgAQYQxiKBUjdCVAAWMMBcAF4AZABAJgBP6ABc6oBATK4AQHIAQD4AQGYAgOgAoIBqAISwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBZgDCLoGBggBEAEYCJIHATOgB-0s&sclient=gws-wiz-serp" target="_blank">St. Julian's</a></li>
          <li><a href="https://www.google.com/search?q=St.+Paul%27s+bay&oq=St.+Paul%27s+Bay&gs_lcrp=EgZjaHJvbWUqDAgAEEUYOxjjAhiABDIMCAAQRRg7GOMCGIAEMgcIARAuGIAEMgcIAhAuGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgYIBhBFGDwyBggHEEUYPagCCLACAQ&sourceid=chrome&ie=UTF-8" target="_blank">St. Paul's Bay</a></li>
          <li><a href="https://www.google.com/search?q=Sliema&sca_esv=7898575184a519fd&sca_upv=1&sxsrf=ADLYWIKeSw5gdxTxE7FmYNkVMHkKSt0IsQ%3A1718623503191&ei=Dx1wZqCyC5qChbIP2eOk2Ao&ved=0ahUKEwjg9aO7w-KGAxUaQUEAHdkxCasQ4dUDCBA&uact=5&oq=Sliema&gs_lp=Egxnd3Mtd2l6LXNlcnAiBlNsaWVtYTIKECMYgAQYJxiKBTIQEC4YgAQYsQMYQxiDARiKBTIZEC4YgAQYQxjHARiYBRiZBRiKBRieBRivATIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIWEC4YgAQYQxjHARiYBRiZBRiKBRivATIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAESIwFUABYxgRwAXgBkAEAmAFnoAGqA6oBAzMuMrgBA8gBAPgBAZgCBqACyAOoAhTCAgcQIxgnGOoCwgIUEAAYgAQY4wQYtAIY6QQY6gLYAQHCAhQQLhiABBjjBBi0AhjpBBjqAtgBAcICFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQLCAhYQLhgDGLQCGOUCGOoCGIwDGI8B2AECwgIEECMYJ8ICChAuGIAEGCcYigXCAgoQLhiABBhDGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICEBAuGIAEGEMYxwEYigUYrwHCAgsQLhiABBixAxiDAcICGhAuGIAEGLEDGIMBGMcBGJgFGJkFGIoFGK8BwgIOEC4YgAQYsQMYgwEYigXCAhAQLhiABBjRAxhDGMcBGIoFwgIXEC4YgAQYsQMYgwEYxwEYmAUYmQUYrwHCAhYQLhiABBixAxjRAxhDGMcBGMkDGIoFwgIIEAAYgAQYsQOYAwy6BgYIARABGAG6BgYIAhABGAuSBwMzLjOgB45p&sclient=gws-wiz-serp" target="_blank">Sliema</a></li>
        </ul>
      </div>

      <h1>Hotel Logos (FaceBook Profile Pages)</h1>

      <div>
        <p><span className="citation">Malta Marriott Resort and Spa... - Malta Marriott Resort & Spa.</span> www.facebook.com/maltamarriott/photos/d41d8cd9/712467164249809/?_rdr.</p>
        <p><span className="citation">Facebook.</span> www.facebook.com/photo/?fbid=715323507302775&set=a.715323470636112.</p>
        <p><span className="citation">Facebook.</span> www.facebook.com/photo/?fbid=399887618790005&set=a.399887628790004.</p>
      </div>

      <h1>Landmarks Images</h1>
      <p>"Hauptaltar der St. John’s Co-Cathedral." Wikimedia Commons, https://upload.wikimedia.org/wikipedia/commons/3/37/Hauptaltar_der_St._John%E2%80%99s_Co-Cathedral.JPG</p>
      <p>"Azure Window 2009." Wikimedia Commons, https://upload.wikimedia.org/wikipedia/commons/e/ec/Azure_Window_2009.JPG</p>
      <p>"Hypogée Hal Saflieni." Wikimedia Commons, https://upload.wikimedia.org/wikipedia/commons/0/08/Hypog%C3%A9e_Hal_Saflieni.jpg</p>
      <p>"Fort St. Elmo, Valletta." Wikimedia Commons, https://upload.wikimedia.org/wikipedia/commons/5/53/Fort_St._Elmo%2C_Valletta_-_panoramio.jpg.</p>
      <p>"Blue Grotto Malta Seascape Photography." Wikimedia Commons, https://upload.wikimedia.org/wikipedia/commons/9/9e/Blue_Grotto_Malta_Seascape_Photography_%28163621137%29.jpeg</p>
      <p>"Upper Barrakka Gardens." Wikimedia Commons, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJp6PKpSyygmh46FflXY_YoCPZCy6dnicxmA&s</p>
      <p>"Marsolokxx. 'The Upper Barrakka Gardens.' Wikimedia Commons, https://upload.wikimedia.org/wikipedia/commons/8/81/The_Upper_Barrakka_Gardens.jpg</p>
      <p>"The Blue Lagoon, Malta." Wikimedia Commons, https://upload.wikimedia.org/wikipedia/commons/8/8c/The_Blue_Lagoon%2C_Malta_04.jpg</p>
      <p>"Triton Fountain in 2018." Wikimedia Commons, https://upload.wikimedia.org/wikipedia/commons/5/59/Triton_Fountain_in_2018_02.jpg</p>
    </div>
  )
}

export default Sources