var color =
{
  // Paramètres
  hex: '0123456789ABCDEF',
  preHex: ['AA3939', 'FFAAAA', 'D46A6A', '801515', '550000'],
  text: '',

  // Hexadécimal aléatoire
  hexRandom: function()
  {
    return this.hex[Math.floor(Math.random() * 16)];
  },

  // Création de la couleur en hexadécimal
  hexRandomX: function(nb)
  {
    if (document.getElementById('colorY').checked)
    for(var i = 0, hexCombo = ''; i < nb; i++)
    hexCombo += this.hexRandom();

    else
    hexCombo = this.preHex[Math.floor(Math.random() * 5)];

    return hexCombo;
  },

  // Création du tableau
  createTable: function()
  {
    var divTable = document.getElementsByTagName('div')[7];
    divTable.children[0].style.display = 'flex';
    var table = divTable.appendChild(document.createElement('table'));
    var width = document.getElementById('sizeX').value;
    var height = document.getElementById('sizeY').value;
    var nbLine = document.getElementById('nbLine').value;
    var nbCell = document.getElementById('nbCell').value;

    // Cellules en blanc au clic
    table.onclick = this.cellClick;

    // Le texte des cellules
    if (document.getElementById('spaceY').checked)
    this.text += document.getElementsByTagName('textarea')[0].value;
    else
    this.text += document.getElementsByTagName('textarea')[0].value.replace(/[ \n\r]+/, '');

    for (var y = 0, iChar = 0, tr; y < nbLine; y++)
    {
      tr = table.insertRow();

      for (var x = 0, td; x < nbCell; x++)
      {
        // La cellule
        td = tr.insertCell();

        // Taille est couleur
        td.style.backgroundColor = '#' + this.hexRandomX(6);
        td.style.width = width + 'px';
        td.style.height = height + 'px';

        // Lettre de la cellule
        if (this.text[iChar])
        {
          td.innerHTML = this.text[iChar];
          td.style.fontSize = this.textResize(width, height) + 'em';
          iChar++;
        }
      }
    }

    // Destruction de l'ancien tableau
    var lastTable = document.getElementsByTagName('table')[0];
    if (lastTable) lastTable.parentNode.removeChild(lastTable);

    // Création du nouveau tableau
    divTable.appendChild(table);
  },

  // cellule au click
  cellClick: function(e)
  {
    e.target.style.backgroundColor = 'white';
  },

  // cellule au click
  textResize: function(w, h)
  {
    w = Number(w);
    h = Number(h);

    return ((w <= h) ? (1.2 / (25 / w)) : (1.2 / (25 / h))).toFixed(2);
  },

  // Effacement du texte dans le tableau
  textClear: function()
  {
    var tdElement = document.getElementsByTagName('td');

    for(var i = 0; i < tdElement.length; i++)
    tdElement[i].innerHTML = '';

    this.lastText = [];
  },

  // Numérique sinon rien
  inputNum: function(obj)
  {
    obj.value = obj.value.replace(/[^0-9]+/, '');
  }
}
