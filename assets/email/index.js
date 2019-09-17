const orderConfirmation = {
  de: {
    subject: 'Schnelle-Brillen | Danke für deine Bestellanfrage!',
    text: ({ Firstname }) =>
      `Hallo ${Firstname}, danke für deine flotte Bestellanfrage. Wir machen uns ans Werk und schreiben dir nochmal eine Email wenn die schnellen Brillen auf dem Weg sind. Bis dahin genieß die letzten langsamen Tage in deinem Leben. Cheers Team Schnelle-Brillen.de`,
    html: ({ Firstname }) =>
      `Hallo ${Firstname}, danke für deine flotte Bestellanfrage. Wir machen uns ans Werk und schreiben dir nochmal eine Email wenn die schnellen Brillen auf dem Weg sind. Bis dahin genieß die letzten langsamen Tage in deinem Leben. Cheers Team Schnelle-Brillen.de`,
  },
};

const orderNotification = {
  de: {
    subject: 'Schnelle-Brillen | Brillen verkauft!',
    text: data =>
      `Hallo schnelle(s/r) Boy or Girl , wir haben gerade verkauft jooo. folgende daten liegen vor: ${JSON.stringify(
        data
      )}. Check bitte, dass alles mit rechten dingen zu geht und dann nichts wie raus mit dem Zeug. https://schnelle-brillen.de/admin`,
    html: data =>
      `Hallo schnelle(s/r) Boy or Girl , wir haben gerade verkauft jooo. folgende daten liegen vor: ${JSON.stringify(
        data
      )}. Check bitte, dass alles mit rechten dingen zu geht und dann nichts wie raus mit dem Zeug. https://schnelle-brillen.de/admin`,
  },
};

module.exports = {
  orderConfirmation,
  orderNotification,
};
