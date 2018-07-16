var map, infowindow;
var chicago = {
    lat: 41.85,
    lng: -87.65
};



function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: chicago
    });

    //bind map click event
    map.addListener('click', function (e) {

        //placeMarkerAndPanTo(e.latLng, map);
    });

    infowindow = new google.maps.InfoWindow();

    // Create the DIV to hold the control and call the CenterControl()

    //搜索查询
    /*var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });*/



}




//query map click event
function queryMarkerAndPanTo(map, data) {

    var myLatlng = new google.maps.LatLng(data.gcenterlat, data.gcenterlng);
    var image = "http://gcsbucket.oss-cn-hongkong.aliyuncs.com/temp/local.png?x-oss-process=image/resize,w_40";
    var marker = new google.maps.Marker({
        position: myLatlng,
        draggable: false,
        map: map,
        markerData: data,
        animation: google.maps.Animation.DROP,
        icon: image
    });

    map.panTo(myLatlng);
    map.setZoom(15);

    //var po =new google.maps.LatLng( marker.getPosition());
    //var newInfowindow = new google.maps.InfoWindow();
    //open infowindow
    var contentString = '<div class="infowindows">' +
        '<div class="infoTitile">' + data.shopName + ' </div>' +
        ' <div class="infoContent">' +
        '      <div class="infoRow"><div class="rowName"></div><div class="rowValue">' + data.address + ' </div></div>' +
        '      <div class="infoRow"><div class="rowName"></div><div class="rowValue">' + data.opening_hours + ' </div></div>' +
        '      <div class="infoRow"><div class="rowName"></div><div class="rowValue">' + data.shopTel + ' </div></div>' +
        /*'    <div class="infoRow"><div class="rowName">Store Email:</div><div class="rowValue">' + data.shopEmail + ' </div></div>' +*/
        //'      <div class="infoRow"  style="margin-top:10px;"><div class="rowName"></div><div class="rowValue"  style="text-align:right;"> <input type="button" value="delete"   onclick="queryOne(\'' + data.id + '\')" /></div></div>' +
        '     </div>' +
        '   </div>';

    infowindow.setContent(contentString);
    //add marker click event
    marker.addListener('click', function (e) {

        var markerData = this.markerData;
        queryOne(markerData, map);
    });

    infowindow.open(map, marker);
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
$(document).ready(function () {
    initQueryMarker();
    //init map location
    queryGeoLocation();
});

function saveData(lat, lng) {
    var storeName = document.getElementById("storeName").value;
    var storeAddress = document.getElementById("storeAddress").value;
    var businessHours = document.getElementById("businessHours").value;
    var storeTel = document.getElementById("storeTel").value;
    //var storeEmail = document.getElementById("storeEmail").value;
    $.ajax({
        url: "http://47.90.105.127:9898/map/save",
        type: "GET",
        data: {
            jsonCallBack: "saveCallBack",
            params: '{"shopEmail":"' + storeEmail + '","gcenterlng":"' + lng + '", "gcenterlat":"' + lat + '","shopType":"1","opening_hours":"' + businessHours + '","shopName": "' + storeName + '","address":"' + storeAddress + '","shopTel":"' + storeTel + '"  }'
        },
        dataType: "jsonp",
        success: function (data) {},
        complete: function (XMLHttpRequest, textStatus) {},
    });
}

function saveCallBack(v) {
    var status = v.status;
    if (status == 200) {
        initQueryMarker();
    } else {
        alert("Add data fail");
    }
}


function queryOne(data) {
    $.ajax({
        url: "http://47.90.105.127:9898/map/queryOne",
        type: "GET",
        data: {
            jsonCallBack: "queryOneCallBack",
            id: data.id
        },
        dataType: "jsonp",
        success: function (data) {},
        complete: function (XMLHttpRequest, textStatus) {},
    });
}

function queryOneCallBack(v) {
    queryMarkerAndPanTo(map, v);
}


function queryListOne(dataId) {
    $.ajax({
        url: "http://47.90.105.127:9898/map/queryOne",
        type: "GET",
        data: {
            jsonCallBack: "queryOneCallBack",
            id: dataId
        },
        dataType: "jsonp",
        success: function (data) {},
        complete: function (XMLHttpRequest, textStatus) {},
    });
}

function initQueryMarker() {
    $.ajax({
        url: "http://47.90.105.127:9898/map/queryAll",
        type: "GET",
        data: {
            jsonCallBack: "queryCallBack"
        },
        dataType: "jsonp",
        success: function (data) {},
        complete: function (XMLHttpRequest, textStatus) {},
    });
}

function queryCallBack(v) {
    var data = v;
    //Create list  data
    createList(v);
    //Add marker to map alert infowindow
    for (var i = 0, len = v.length; i < len; i++) {
        var dataSingle = data[i];
        //production   data
        queryMarkerAndPanTo(map, dataSingle);
    }
}

function createList(data) {
    var htmlContent = "";
    for (var i = 0, len = data.length; i < len; i++) {
        var dataSingle = data[i];
        //production   data
        htmlContent += '<div class="rightContentRow" onclick="queryListOne(\'' + dataSingle.id + '\')" >' + '<div class="localTitle">' + dataSingle.shopName + '</div>' + '<div class="localContent">' + dataSingle.address + '</div>' + '<div class="localPage">' + dataSingle.opening_hours + '</div> ' + '<div class="localPage">' + dataSingle.shopTel + '</div>' + '</div>';
    }
    $("#dataList").html(htmlContent);
    /*地图右边变红色*/
    $(".rightContentRow").bind("click", function () {
        $(".rightContentRow").removeClass("map_active");
        $(this).addClass("map_active");
    });
}

function queryGeoLocation() {
    $.ajax({
        url: "http://47.90.105.127:9898/map/ip",
        type: "GET",
        data: {
            jsonCallBack: "queryGeoLocationCallBack"
        },
        dataType: "jsonp",
        success: function (data) {},
        complete: function (XMLHttpRequest, textStatus) {},
    });
}

function queryGeoLocationCallBack(v) {
    document.getElementById('address').value = v;
    //geocodeAddress(geocoder, map);
    //搜索查询
    var initGeocoder = new google.maps.Geocoder();
    initGeocoder.geocode({
        'address': v
    }, function (results, status) {
        if (status === 'OK') {

            map.setCenter(results[0].geometry.location);
            map.setZoom(5);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });

}