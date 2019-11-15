
exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { name: '$tupid Young' },
        { name: 'Lil shadow' },
        { name: 'Lilmanwest' },
        { name: 'Thai VG' },
        { name: 'EvilAsianBastard' },
        { name: 'The Duecez' },
        { name: 'Heartbreaka' },
        { name: 'MBNel' },
        { name: 'Gee Q Pham' },
        { name: 'Russel' },
        { name: 'Mozzy' },
      ]);
    });
};
