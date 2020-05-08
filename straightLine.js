/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    
    if(coordinates.length<3)
        return true
    
    var slope = ((coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0]))
    
    for(i=2;i<coordinates.length;i++){
        if(slope!== ((coordinates[i][1]-coordinates[i-1][1])/(coordinates[i][0]-coordinates[i-1][0])))
            return false
    }
    return true;
};
