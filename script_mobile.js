(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"scrollBarColor":"#000000","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"rate":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"history":{},"name":"Player486"},"layout":"absolute","buttonToggleFullscreen":"this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","minWidth":20,"gap":10,"scripts":{"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"playAudioList":TDV.Tour.Script.playAudioList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"translate":TDV.Tour.Script.translate,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"clone":TDV.Tour.Script.clone,"setValue":TDV.Tour.Script.setValue,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"init":TDV.Tour.Script.init,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"executeJS":TDV.Tour.Script.executeJS,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMainViewer":TDV.Tour.Script.getMainViewer,"showWindow":TDV.Tour.Script.showWindow,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setLocale":TDV.Tour.Script.setLocale,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"historyGoForward":TDV.Tour.Script.historyGoForward,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizFinish":TDV.Tour.Script.quizFinish,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"textToSpeech":TDV.Tour.Script.textToSpeech,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlays":TDV.Tour.Script.getOverlays,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumePlayers":TDV.Tour.Script.resumePlayers,"unregisterKey":TDV.Tour.Script.unregisterKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"registerKey":TDV.Tour.Script.registerKey,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"createTween":TDV.Tour.Script.createTween,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"isPanorama":TDV.Tour.Script.isPanorama,"initQuiz":TDV.Tour.Script.initQuiz,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"cloneBindings":TDV.Tour.Script.cloneBindings,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"startMeasurement":TDV.Tour.Script.startMeasurement,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"openLink":TDV.Tour.Script.openLink,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"getKey":TDV.Tour.Script.getKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio},"vrPolyfillScale":0.5,"backgroundColorRatios":[0],"scrollBarMargin":2,"children":["this.MainViewer_mobile","this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile"],"width":"100%","hash": "112b0c019b2fcd6b566556074a495cb7f687ada3e4daf1ad499537e74a28d0e7", "definitions": [{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Down"},"height":23,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_pressed.png","width":23,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_rollover.png","id":"IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","iconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile.png"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Left"},"height":23,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_pressed.png","width":23,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_rollover.png","id":"IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","iconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile.png"},{"class":"FadeOutEffect","duration":200,"id":"effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5"},{"class":"PanoramaCamera","initialSequence":"this.sequence_177C5E28_35EC_E780_41B4_9790B8CDC617","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_174346DF_35EC_E480_4198_B16FF670F779_camera","enterPointingToHorizon":true},{"class":"FadeInEffect","duration":200,"id":"effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA","camera":"this.panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_camera"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57","camera":"this.panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_camera"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4","camera":"this.panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_camera"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_174346DF_35EC_E480_4198_B16FF670F779","camera":"this.panorama_174346DF_35EC_E480_4198_B16FF670F779_camera"}],"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist"},{"label":trans('panorama_174346DF_35EC_E480_4198_B16FF670F779.label'),"hfovMin":"150%","data":{"label":"PH902"},"class":"Panorama","id":"panorama_174346DF_35EC_E480_4198_B16FF670F779","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":["ondemand","mobilevr2gen"],"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","url":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512,"width":3072},{"class":"TiledImageResourceLevel","url":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_0/{face}/vr/0.jpg","rowCount":1,"colCount":6,"height":1536,"width":9216}]}}],"hfov":360,"thumbnailUrl":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_t.jpg","vfov":180,"hfovMax":130},{"overflow":"scroll","id":"Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile","propagateClick":false,"scrollBarColor":"#000000","data":{"name":"Right"},"right":"0%","scrollBarWidth":5,"layout":"horizontal","minWidth":1,"children":["this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile"],"backgroundOpacity":0,"paddingRight":5,"height":"100%","scrollBarMargin":1,"width":"50%","horizontalAlign":"right","class":"Container","minHeight":1,"verticalAlign":"middle","top":"0%"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"mode":"toggle","verticalAlign":"middle","data":{"name":"Thumblist"},"height":46,"backgroundOpacity":0,"width":46,"horizontalAlign":"center","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false)}.bind(this); if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile.get('visible')){ visibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile) } else { invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile) }","minHeight":0,"class":"IconButton","id":"IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","iconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile.png"},{"overflow":"scroll","id":"Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile","propagateClick":false,"scrollBarColor":"#000000","scrollBarWidth":5,"layout":"horizontal","minWidth":1,"children":["this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile"],"verticalAlign":"middle","backgroundOpacity":0,"paddingLeft":5,"height":"100%","scrollBarMargin":1,"width":"50%","class":"Container","minHeight":1,"data":{"name":"Left"},"top":"0%","left":"0%"},{"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"playbackBarLeft":0,"toolTipFontColor":"#606060","playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","data":{"name":"Main Viewer"},"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","toolTipPaddingLeft":3,"playbackBarBorderColor":"#FFFFFF","progressBorderSize":0,"vrPointerColor":"#FFFFFF","height":"100%","subtitlesTextShadowOpacity":1,"playbackBarProgressBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","vrPointerSelectionColor":"#FF6600","playbackBarBottom":5,"toolTipFontSize":"1.11vmin","vrPointerSelectionTime":2000,"toolTipFontFamily":"Arial","toolTipShadowBlurRadius":1,"width":"100%","playbackBarBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderColor":"#000000","playbackBarRight":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadHeight":15,"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"class":"ViewerArea","toolTipBorderColor":"#767676","playbackBarHeadShadowBlurRadius":1.5,"propagateClick":false,"subtitlesTextShadowVerticalLength":1,"id":"MainViewer_mobile","progressHeight":10,"toolTipBorderRadius":1,"progressBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorRatios":[0],"toolTipTextShadowBlurRadius":1,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadBorderRadius":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingRight":3,"toolTipTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"progressRight":0,"toolTipShadowColor":"#333333","subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressLeft":0,"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBottom":0,"progressBarBorderRadius":0,"minHeight":25,"progressBarBorderSize":0,"minWidth":50,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial"},{"overflow":"scroll","propagateClick":false,"scrollBarColor":"#000000","data":{"name":"SETTINGS"},"right":"2%","layout":"absolute","minWidth":1,"scrollBarWidth":5,"children":["this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile","this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile","this.Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile"],"gap":5,"height":50,"backgroundOpacity":0.9,"backgroundColorRatios":[0],"scrollBarMargin":1,"backgroundColor":["#534741"],"minHeight":1,"class":"Container","bottom":10,"id":"Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","left":"2%"},{"aaEnabled":true,"touchControlMode":"drag_rotation","buttonMoveUp":"this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","buttonMoveDown":"this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","buttonCardboardView":"this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile","arrowKeysAction":"translate","class":"PanoramaPlayer","buttonMoveLeft":"this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","displayPlaybackBar":true,"id":"MainViewer_mobilePanoramaPlayer","viewerArea":"this.MainViewer_mobile","buttonZoomIn":"this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","mouseControlMode":"drag_rotation","buttonMoveRight":"this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","buttonZoomOut":"this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Collapse"},"height":46,"backgroundOpacity":0,"width":46,"horizontalAlign":"center","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile); invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false)}.bind(this); visibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile); visibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile); visibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile)","minHeight":0,"class":"IconButton","id":"IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","iconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile.png"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Next"},"height":46,"backgroundOpacity":0,"width":46,"horizontalAlign":"center","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","minHeight":0,"class":"IconButton","id":"IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile","iconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile.png"},{"overflow":"scroll","id":"Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile","propagateClick":false,"scrollBarColor":"#000000","data":{"name":"Center"},"right":"25%","minWidth":1,"scrollBarWidth":5,"layout":"horizontal","children":["this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile"],"backgroundOpacity":0,"visible":false,"height":"100%","scrollBarMargin":1,"horizontalAlign":"center","class":"Container","minHeight":1,"verticalAlign":"middle","top":"0%","left":"25%"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Zoom In"},"height":23,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_pressed.png","width":23,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_rollover.png","id":"IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","iconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile.png"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Up"},"height":23,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_pressed.png","width":23,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_rollover.png","id":"IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","iconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile.png"},{"class":"PanoramaCamera","initialSequence":"this.sequence_1743CE28_35EC_E780_41A4_AA3A43538F26","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_camera","enterPointingToHorizon":true},{"class":"FadeInEffect","duration":100,"id":"effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050"},{"backgroundColor":["#534741"],"left":"2%","itemThumbnailOpacity":1,"itemBorderRadius":0,"itemLabelTextDecoration":"none","selectedItemBorderSize":1.5,"right":"2%","itemThumbnailBorderSize":0,"layout":"horizontal","gap":5,"height":101,"paddingLeft":7,"backgroundOpacity":0.9,"backgroundColorRatios":[0],"paddingRight":7,"itemThumbnailShadow":false,"itemLabelFontWeight":"normal","itemBackgroundColorDirection":"vertical","itemLabelFontSize":"9px","itemLabelFontColor":"#999999","itemPaddingTop":3,"selectedItemBackgroundColorRatios":[0.0392156862745098],"selectedItemBorderColor":"#FFFFFF","playList":"this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist","data":{"name":"THUMBNAIL LIST"},"selectedItemBackgroundOpacity":0.9,"class":"ThumbnailList","itemPaddingBottom":3,"itemPaddingLeft":3,"itemThumbnailShadowOpacity":0.54,"rollOverItemLabelFontColor":"#FFFFFF","propagateClick":false,"bottom":60,"selectedItemLabelFontWeight":"bold","id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","itemBackgroundColorRatios":[],"itemBackgroundColor":[],"itemThumbnailShadowBlurRadius":8,"scrollBarWidth":2,"selectedItemBackgroundColor":["#534741"],"itemThumbnailHeight":70,"itemThumbnailShadowColor":"#000000","itemLabelFontFamily":"Arial","scrollBarOpacity":0,"itemPaddingRight":3,"scrollBarMargin":0,"itemThumbnailWidth":120,"rollOverItemLabelFontWeight":"normal","itemThumbnailScaleMode":"fit_outside","itemLabelFontStyle":"normal","itemThumbnailBorderRadius":0,"paddingTop":8.5,"rollOverItemBackgroundOpacity":0,"selectedItemLabelFontColor":"#FFFFFF","itemBackgroundOpacity":0,"itemLabelGap":4,"itemThumbnailShadowSpread":1,"scrollBarColor":"#FFFFFF","minWidth":10,"minHeight":10},{"label":trans('panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA.label'),"hfovMin":"150%","data":{"label":"ENTRY"},"class":"Panorama","id":"panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":["ondemand","mobilevr2gen"],"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","url":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512,"width":3072},{"class":"TiledImageResourceLevel","url":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_0/{face}/vr/0.jpg","rowCount":1,"colCount":6,"height":1536,"width":9216}]}}],"hfov":360,"thumbnailUrl":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_t.jpg","vfov":180,"hfovMax":130},{"id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","propagateClick":false,"iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile.png","minWidth":1,"transparencyActive":true,"verticalAlign":"middle","data":{"name":"previous"},"width":46,"backgroundOpacity":0,"visible":false,"horizontalAlign":"center","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","maxWidth":46,"maxHeight":46,"class":"IconButton","left":"2%","bottom":"35%","top":"35%","minHeight":1},{"label":trans('panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4.label'),"hfovMin":"150%","data":{"label":"PH901"},"class":"Panorama","id":"panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":["ondemand","mobilevr2gen"],"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","url":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512,"width":3072},{"class":"TiledImageResourceLevel","url":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_0/{face}/vr/0.jpg","rowCount":1,"colCount":6,"height":1536,"width":9216}]}}],"hfov":360,"thumbnailUrl":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_t.jpg","vfov":180,"hfovMax":130},{"class":"FadeOutEffect","duration":100,"id":"effect_3A451B34_1C82_9908_41AD_37B1C5A316C2"},{"transparencyActive":true,"propagateClick":false,"right":"40%","iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile.png","minWidth":1,"verticalAlign":"middle","height":46,"backgroundOpacity":0,"visible":false,"horizontalAlign":"center","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile); invisibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile); invisibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile)","maxWidth":46,"class":"IconButton","maxHeight":46,"left":"40%","data":{"name":"-Expand"},"bottom":0,"id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","minHeight":1},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Previous"},"height":46,"backgroundOpacity":0,"width":46,"horizontalAlign":"center","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","minHeight":0,"class":"IconButton","id":"IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","iconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile.png"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA","camera":"this.panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57","camera":"this.panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4","camera":"this.panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_174346DF_35EC_E480_4198_B16FF670F779","camera":"this.panorama_174346DF_35EC_E480_4198_B16FF670F779_camera","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"id":"mainPlayList"},{"class":"PanoramaCamera","initialSequence":"this.sequence_17438E28_35EC_E780_41C0_4CEAEF913173","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_camera","enterPointingToHorizon":true},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Zoom Out"},"height":23,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_pressed.png","width":23,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_rollover.png","id":"IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile","iconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile.png"},{"transparencyActive":true,"propagateClick":false,"minWidth":1,"verticalAlign":"middle","data":{"name":"VR"},"height":46,"backgroundOpacity":0,"width":46,"horizontalAlign":"center","maxWidth":46,"maxHeight":46,"class":"IconButton","minHeight":1,"id":"IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile","iconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile.png"},{"id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile","propagateClick":false,"right":"2%","minWidth":1,"transparencyActive":true,"verticalAlign":"middle","width":46,"backgroundOpacity":0,"visible":false,"horizontalAlign":"center","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","maxWidth":46,"maxHeight":46,"class":"IconButton","minHeight":1,"data":{"name":"next"},"bottom":"35%","top":"35%","iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile.png"},{"label":trans('panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57.label'),"hfovMin":"150%","data":{"label":"LOCKER"},"class":"Panorama","id":"panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":["ondemand","mobilevr2gen"],"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","url":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512,"width":3072},{"class":"TiledImageResourceLevel","url":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_0/{face}/vr/0.jpg","rowCount":1,"colCount":6,"height":1536,"width":9216}]}}],"hfov":360,"thumbnailUrl":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_t.jpg","vfov":180,"hfovMax":130},{"class":"FadeOutEffect","duration":100,"id":"effect_0A30489F_1C86_6738_41A8_2722230A2E2F"},{"class":"PanoramaCamera","initialSequence":"this.sequence_177C7E28_35EC_E780_41C8_666A15CBD623","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_camera","enterPointingToHorizon":true},{"toolTipTextShadowBlurRadius":1,"transparencyActive":true,"propagateClick":false,"toolTipBorderRadius":1,"toolTipFontColor":"#606060","minWidth":1,"mode":"toggle","toolTipPaddingRight":3,"verticalAlign":"middle","toolTipTextShadowColor":"#000000","data":{"name":"fullscreen"},"height":46,"backgroundOpacity":0,"toolTipShadowColor":"#333333","width":46,"toolTipShadowBlurRadius":1,"horizontalAlign":"center","toolTipFontFamily":"Arial","toolTipFontSize":6,"toolTip":trans('IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.toolTip'),"toolTipBackgroundColor":"#F6F6F6","maxWidth":46,"maxHeight":46,"toolTipBorderColor":"#767676","class":"IconButton","minHeight":1,"toolTipPaddingLeft":3,"id":"IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","iconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.png"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Right"},"height":23,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_pressed.png","width":23,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_rollover.png","id":"IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","iconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile.png"},{"class":"PanoramaCameraSequence","id":"sequence_177C5E28_35EC_E780_41B4_9790B8CDC617","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"class":"PanoramaCameraSequence","id":"sequence_1743CE28_35EC_E780_41A4_AA3A43538F26","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"class":"PanoramaCameraSequence","id":"sequence_17438E28_35EC_E780_41C0_4CEAEF913173","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"class":"PanoramaCameraSequence","id":"sequence_177C7E28_35EC_E780_41C8_666A15CBD623","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]}],"height":"100%","minHeight":20,"class":"Player","backgroundColor":["#FFFFFF"],"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.0.js.map
})();
//Generated with v2023.1.0, Wed May 1 2024