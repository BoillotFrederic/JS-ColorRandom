<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Couleur Aléatoire</title>
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/jScript.js"></script>
  </head>
  <body>
    <form action="" method="post">
      <div>
        <label for="sizeY">Cell Width :</label><br />
        <label for="sizeX">Cell Height :</label>
      </div>
      <div>
        <input onkeyup="color.inputNum(this);" type="text" id="sizeX" name="sizeX" value="25" autocomplete="off" /><br />
        <input onkeyup="color.inputNum(this);" type="text" id="sizeY" name="sizeY" value="25" autocomplete="off" />
      </div>
      <div>
        <label for="nbLine">Nombre de ligne :</label><br />
        <label for="nbCell">Nombre de cellule :</label>
      </div>
      <div>
        <input onkeyup="color.inputNum(this);" type="text" id="nbLine" name="nbLine" value="20" autocomplete="off" /><br />
        <input onkeyup="color.inputNum(this);" type="text" id="nbCell" name="nbCell" value="30" autocomplete="off" />
      </div>
      <div>
        <span>
          Texte du tableau :<br />
          <label for="space">Espaces ?</label>
          Oui <input type="radio" id="spaceY" name="space" checked="checked" />
          Non <input type="radio" id="spaceN" name="space" />
        </span>
      </div>
      <div>
        <textarea autocomplete="off"></textarea>
      </div>
      <div>
        <label for="color">Couleur ?</label><br />
        Aléatoire <input type="radio" id="colorY" name="color" checked="checked" /><br />
        Prédéfinie <input type="radio" id="colorN" name="color" />
      </div>
    </form>
    <a href="javascript:color.createTable()">Créer le tableau</a>
    <br />
    <div>
      <div>
        <span onclick="color.textClear();">
          E<br />F<br />F<br />A<br />C<br />E<br />R
          <br /><br />
          L<br />E
          <br /><br />
          T<br />E<br />X<br />T<br />E
        </span>
      </div>
    </div>
  </body>
</html>
