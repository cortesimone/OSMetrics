function end() {
print("Count node "+cnode);
print("Count way "+cway);
print("Count rel "+crel);
print("Count area "+careaway);
print("Count area rel "+carearel);

//print("Count building=yes"+buildingyes);
//print("Count building "+buildingother);

users.sort(sort_by_rank);

 var out = Osmium.Output.CSV.open(dir + 'userladder.csv');
out.print('uid\tusername\trank\tnodes\tways\trelations\tareas_way\tareas_rel');
    for (var i=0;i<users.length;i++) {
        if(typeof(users[i])=='undefined') continue;
        out.print(users[i].uid, users[i].name, users[i].rank(), users[i].nodes, users[i].ways, users[i].relations, users[i].areaways, users[i].arearels);
        }
 out.close();
    print('End!');
}
