function impressum(){
    removeClasses_pp();
    let work_array = document.getElementsByClassName('workspace');
    work_array[0].innerHTML = '';
    work_array[0].innerHTML += impressTempl()
    
}

function privacy(){
    let menu = document.getElementsByClassName('menu')[0];
    let container = document.getElementsByClassName('container')[0];
    let work_array = document.getElementsByClassName('workspace');
    work_array[0].innerHTML = '';
    work_array[0].innerHTML += privacyTempl();
    work_array[0].classList.add('workspace-pp');
    menu.classList.add('menu-pp');
    container.classList.add('container-pp');

}

function removeClasses_pp(){
    let menu = document.getElementsByClassName('menu')[0];
    let container = document.getElementsByClassName('container')[0];
    let work_array = document.getElementsByClassName('workspace');
    work_array[0].classList.remove('workspace-pp');
    menu.classList.remove('menu-pp');
    container.classList.remove('container-pp');


}

function impressTempl(){
    return `
    <div class='impressum'>
    <h1>Impressum</h1>
    <p class='imp_highlight'>Angaben gemäß § 5 TMG</p>
    <p>Daniel Pozzan <br>  Damerowsweg 23<br> 22081 Hamburg <br> </p>
    <p> <strong class='imp_highlight'>Vertreten durch: </strong> <br> <br>Daniel Pozzan<br></p>
    <p><strong class='imp_highlight'>Kontakt:</strong> <br> <br> 
    Telefon: 0049-17631048164<br>
    E-Mail: <a href='mailto:pozzan.dnl@gmail.com'>pozzan.dnl@gmail.com</a></br></p><br> 
    Website Impressum von <a href="https://www.impressum-generator.de">impressum-generator.de</a>
    </div>
    `;
}

function privacyTempl(){
    return `
    <div class="privacy_policy">
    <h1>Datenschutzerklärung</h1>

    <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
    <p>Daniel Pozzan
    <br>Damerowsweg 23
    <br>22081 Hamburg
    <br>Telefon: 0049-17631048164
    <br>Email: pozzan.dnl@gmail.com
    <br>WebSeite: http://gruppe-252.developerakademie.net/Join-Project-Managment/datenschutz.html
    </p>
    <hr>


    <h2>Ihre Betroffenenrechte</h2>

    <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
    <ul>
        <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
        <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
        <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
        <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
        <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
        <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
    </ul>
    <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
    <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
    <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener nofollow">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a>.</p>
    <p></p>
    <hr>


    <h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>

    <h3>Art und Zweck der Verarbeitung:</h3>
    <p>Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches. </p>
    <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
    <ul>
        <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
        <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
        <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
        <li>zur Optimierung unserer Website.</li>
    </ul>
        <p>Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. anonymisiert statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren. </p>
        <h3>Rechtsgrundlage und berechtigtes Interesse:</h3>
        <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.</p>
        <h3>Empfänger:</h3>
        <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.</p>
        <p></p><h3>Speicherdauer:</h3>
        <p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist. </p>
        <p> Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens 14 Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer anonymisiert, sodass eine  Zuordnung  des aufrufenden Clients nicht mehr möglich ist.</p>
        <p></p><h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
        <p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen. </p>
        <p></p>
        <hr>
        
        
        
        <h2>Cookies</h2>

        <p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen. </p>
        <p>Sie können Sie einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden Links:</p>
    <ul>
        <li>Mozilla Firefox: <a href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen" target="_blank" rel="nofollow noopener">https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen</a></li>
        <li>Internet Explorer: <a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="nofollow noopener">https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
        <li>Google Chrome: <a href="https://support.google.com/accounts/answer/61416?hl=de" target="_blank" rel="nofollow noopener">https://support.google.com/accounts/answer/61416?hl=de</a></li>
        <li>Opera: <a href="http://www.opera.com/de/help" target="_blank" rel="nofollow noopener">http://www.opera.com/de/help</a></li>
        <li>Safari: <a href="https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE" target="_blank" rel="nofollow noopener">https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE</a></li>
    </ul>
    <h3>Speicherdauer und eingesetzte Cookies:</h3>
    <p>Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben, können folgende Cookies auf unseren Webseiten zum Einsatz kommen:</p>
    <p></p>
    <hr>
    
    
    
    <h2>Technisch notwendige Cookies </h2>

    <h3>Art und Zweck der Verarbeitung: </h3>
    <p>Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.</p>
    <p>Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.</p>
    <p>Für folgende Anwendungen benötigen wir Cookies:</p>
    <p></p><h3>Rechtsgrundlage und berechtigtes Interesse: </h3>
    <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer nutzerfreundlichen Gestaltung unserer Website.</p>
    <h3>Empfänger: </h3>
    <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.</p>
    <p></p><h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
    <p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne diese Daten ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein.</p>
    <h3>Widerspruch</h3>
    <p>Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.</p>
    <p></p>
    <hr>
    
 
    
    <h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>

    <p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.</p>
    <p>Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" rel="noopener nofollow" target="_blank">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy/" rel="noopener nofollow" target="_blank">https://www.google.com/policies/privacy/</a>.</p>
    <p></p>
    <hr>



    <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>

    <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
    <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.</p>
    <p>Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
    
    <hr>



    <h2>Änderung unserer Datenschutzbestimmungen</h2>

    <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
    <hr>


    <h2>Fragen an den Datenschutzbeauftragten</h2>

    <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person.</p>
    
    <p><em>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank" rel="noopener">externe Datenschutzbeauftragte</a> (Version #2020-09-30).</em></p>
    </div>
    `;
}