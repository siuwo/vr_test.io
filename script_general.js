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
var script = {"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"scrollBarColor":"#000000","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"rate":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"history":{},"name":"Player486"},"layout":"absolute","buttonToggleFullscreen":"this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4","minWidth":20,"gap":10,"scripts":{"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizStart":TDV.Tour.Script.quizStart,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"translate":TDV.Tour.Script.translate,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setValue":TDV.Tour.Script.setValue,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"clone":TDV.Tour.Script.clone,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"executeJS":TDV.Tour.Script.executeJS,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"init":TDV.Tour.Script.init,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setLocale":TDV.Tour.Script.setLocale,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizFinish":TDV.Tour.Script.quizFinish,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getOverlays":TDV.Tour.Script.getOverlays,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showWindow":TDV.Tour.Script.showWindow,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"textToSpeech":TDV.Tour.Script.textToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMainViewer":TDV.Tour.Script.getMainViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"mixObject":TDV.Tour.Script.mixObject,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumePlayers":TDV.Tour.Script.resumePlayers,"unregisterKey":TDV.Tour.Script.unregisterKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"registerKey":TDV.Tour.Script.registerKey,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"createTween":TDV.Tour.Script.createTween,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"isPanorama":TDV.Tour.Script.isPanorama,"initQuiz":TDV.Tour.Script.initQuiz,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"cloneBindings":TDV.Tour.Script.cloneBindings,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"startMeasurement":TDV.Tour.Script.startMeasurement,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"openLink":TDV.Tour.Script.openLink,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"getKey":TDV.Tour.Script.getKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio},"vrPolyfillScale":0.5,"backgroundColorRatios":[0],"scrollBarMargin":2,"children":["this.MainViewer","this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487","this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9"],"width":"100%","hash": "d9df6afa1e912f50f2f3beac7fce2e21359e7842672cc749e0c22aa330f9c4e4", "definitions": [{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA","camera":"this.panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_camera"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57","camera":"this.panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_camera"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4","camera":"this.panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_camera"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_174346DF_35EC_E480_4198_B16FF670F779","camera":"this.panorama_174346DF_35EC_E480_4198_B16FF670F779_camera"}],"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist"},{"class":"FadeOutEffect","duration":100,"id":"effect_0A30489F_1C86_6738_41A8_2722230A2E2F"},{"class":"FadeOutEffect","duration":200,"id":"effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5"},{"class":"PanoramaCamera","initialSequence":"this.sequence_177C5E28_35EC_E780_41B4_9790B8CDC617","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_174346DF_35EC_E480_4198_B16FF670F779_camera","enterPointingToHorizon":true},{"class":"FadeInEffect","duration":200,"id":"effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Left"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_pressed.png","width":46,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_rollover.png","id":"IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44","iconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44.png"},{"label":trans('panorama_174346DF_35EC_E480_4198_B16FF670F779.label'),"hfovMin":"150%","data":{"label":"PH902"},"class":"Panorama","id":"panorama_174346DF_35EC_E480_4198_B16FF670F779","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":["ondemand","mobilevr2gen"],"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","url":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512,"width":3072}]}}],"hfov":360,"thumbnailUrl":"media/panorama_174346DF_35EC_E480_4198_B16FF670F779_t.jpg","vfov":180,"hfovMax":130},{"rollOverIconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_rollover.png","transparencyActive":true,"propagateClick":false,"minWidth":1,"verticalAlign":"middle","data":{"name":"VR"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_pressed.png","width":46,"horizontalAlign":"center","maxWidth":46,"maxHeight":46,"class":"IconButton","minHeight":1,"id":"IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6","iconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6.png"},{"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"playbackBarLeft":0,"toolTipFontColor":"#606060","playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","data":{"name":"Main Viewer"},"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","progressBorderSize":0,"toolTipPaddingBottom":4,"vrPointerColor":"#FFFFFF","height":"100%","subtitlesTextShadowOpacity":1,"playbackBarProgressBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","vrPointerSelectionColor":"#FF6600","playbackBarBottom":5,"toolTipFontSize":"1.11vmin","vrPointerSelectionTime":2000,"toolTipFontFamily":"Arial","width":"100%","playbackBarBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderColor":"#000000","playbackBarRight":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadHeight":15,"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"class":"ViewerArea","toolTipBorderColor":"#767676","playbackBarHeadShadowBlurRadius":3,"propagateClick":false,"subtitlesTextShadowVerticalLength":1,"id":"MainViewer","progressHeight":10,"progressBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadBorderRadius":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingRight":6,"toolTipTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"progressRight":0,"toolTipShadowColor":"#333333","subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressLeft":0,"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","toolTipPaddingTop":4,"progressBottom":0,"progressBarBorderRadius":0,"minHeight":50,"progressBarBorderSize":0,"minWidth":100,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Down"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_pressed.png","width":46,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_rollover.png","id":"IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF","iconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF.png"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Right"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_pressed.png","width":46,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_rollover.png","id":"IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396","iconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396.png"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Zoom In"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_pressed.png","width":46,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_rollover.png","id":"IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A","iconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A.png"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Zoom Out"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_pressed.png","width":46,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_rollover.png","id":"IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793","iconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793.png"},{"class":"FadeInEffect","duration":100,"id":"effect_3061B548_231D_5DCD_41B4_93FF66204E67"},{"rollOverIconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_rollover.png","transparencyActive":true,"propagateClick":false,"toolTipFontColor":"#606060","minWidth":1,"mode":"toggle","toolTipPaddingRight":6,"verticalAlign":"middle","toolTipTextShadowColor":"#000000","toolTipPaddingBottom":4,"data":{"name":"fullscreen"},"height":46,"backgroundOpacity":0,"toolTipShadowColor":"#333333","width":46,"horizontalAlign":"center","toolTipFontFamily":"Arial","toolTip":trans('IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4.toolTip'),"toolTipPaddingTop":4,"toolTipBackgroundColor":"#F6F6F6","maxWidth":46,"maxHeight":46,"toolTipBorderColor":"#767676","class":"IconButton","minHeight":1,"toolTipPaddingLeft":6,"id":"IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4","iconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4.png"},{"overflow":"scroll","propagateClick":false,"scrollBarColor":"#000000","data":{"name":"SETTINGS"},"right":"1%","layout":"absolute","minWidth":1,"children":["this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF","this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36","this.Container_129084CF_1C83_AF18_418C_2D8031993BE6"],"gap":10,"height":50,"backgroundOpacity":0.9,"backgroundColorRatios":[0],"scrollBarMargin":2,"maxWidth":800,"backgroundColor":["#534741"],"class":"Container","left":"1%","bottom":20,"id":"Container_10BF264C_1C81_AB18_418E_C228A2BBA487","minHeight":1},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Previous"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_pressed.png","width":46,"horizontalAlign":"center","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_rollover.png","id":"IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D","iconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D.png"},{"overflow":"scroll","id":"Container_1185BA07_1C82_BB09_4190_3425ACEF39CF","propagateClick":false,"scrollBarColor":"#000000","layout":"horizontal","minWidth":1,"children":["this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D","this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354"],"verticalAlign":"middle","backgroundOpacity":0,"paddingLeft":10,"height":"100%","scrollBarMargin":2,"width":"30%","class":"Container","minHeight":1,"data":{"name":"Left"},"top":"0%","left":"0%"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Up"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_pressed.png","width":46,"horizontalAlign":"center","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_rollover.png","id":"IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64","iconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64.png"},{"aaEnabled":true,"touchControlMode":"drag_rotation","buttonMoveUp":"this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64","buttonMoveDown":"this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF","buttonCardboardView":"this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6","arrowKeysAction":"translate","class":"PanoramaPlayer","buttonMoveLeft":"this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","buttonZoomIn":"this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A","mouseControlMode":"drag_rotation","buttonMoveRight":"this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396","buttonZoomOut":"this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793"},{"label":trans('panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA.label'),"hfovMin":"150%","data":{"label":"ENTRY"},"class":"Panorama","id":"panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":["ondemand","mobilevr2gen"],"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","url":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512,"width":3072}]}}],"hfov":360,"thumbnailUrl":"media/panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_t.jpg","vfov":180,"hfovMax":130},{"label":trans('panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4.label'),"hfovMin":"150%","data":{"label":"PH901"},"class":"Panorama","id":"panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":["ondemand","mobilevr2gen"],"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","url":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512,"width":3072}]}}],"hfov":360,"thumbnailUrl":"media/panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_t.jpg","vfov":180,"hfovMax":130},{"id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9","propagateClick":false,"right":"1%","minWidth":1,"transparencyActive":true,"verticalAlign":"middle","width":92,"backgroundOpacity":0,"visible":false,"horizontalAlign":"center","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","maxWidth":46,"maxHeight":46,"class":"IconButton","minHeight":1,"data":{"name":"-next"},"bottom":"35%","top":"35%","iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9.png"},{"overflow":"scroll","id":"Container_129084CF_1C83_AF18_418C_2D8031993BE6","propagateClick":false,"scrollBarColor":"#000000","data":{"name":"Center"},"right":"25%","minWidth":1,"layout":"horizontal","children":["this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44","this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396","this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64","this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF","this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A","this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793","this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6"],"backgroundOpacity":0,"height":"100%","scrollBarMargin":2,"horizontalAlign":"center","class":"Container","minHeight":1,"verticalAlign":"middle","top":"0%","left":"25%"},{"class":"FadeOutEffect","duration":100,"id":"effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043"},{"rollOverIconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_rollover.png","transparencyActive":true,"propagateClick":false,"right":"40%","iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8.png","minWidth":1,"verticalAlign":"middle","height":46,"backgroundOpacity":0,"visible":false,"horizontalAlign":"center","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0); invisibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8); invisibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9)","maxWidth":46,"class":"IconButton","maxHeight":46,"left":"40%","data":{"name":"-Expand"},"bottom":0,"id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8","minHeight":1},{"backgroundColor":["#534741"],"minHeight":20,"itemThumbnailOpacity":1,"itemBorderRadius":0,"itemLabelTextDecoration":"none","selectedItemBorderSize":2,"right":"1%","layout":"horizontal","gap":10,"paddingLeft":14,"backgroundOpacity":0.9,"backgroundColorRatios":[0],"paddingRight":14,"itemThumbnailShadow":false,"itemLabelFontWeight":"normal","itemBackgroundColorDirection":"vertical","itemLabelFontSize":"12px","itemLabelFontColor":"#999999","itemPaddingTop":3,"selectedItemBackgroundColorRatios":[0],"selectedItemBorderColor":"#FFFFFF","playList":"this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist","data":{"name":"THUMBNAIL LIST"},"selectedItemBackgroundOpacity":0.9,"class":"ThumbnailList","itemPaddingBottom":3,"itemPaddingLeft":3,"itemThumbnailShadowOpacity":0.54,"rollOverItemLabelFontColor":"#FFFFFF","propagateClick":false,"bottom":70,"selectedItemLabelFontWeight":"bold","id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839","itemBackgroundColorRatios":[],"itemBackgroundColor":[],"itemThumbnailShadowBlurRadius":8,"scrollBarWidth":5,"selectedItemBackgroundColor":["#534741"],"itemThumbnailHeight":70,"itemThumbnailShadowColor":"#000000","itemLabelFontFamily":"Arial","scrollBarOpacity":0,"itemPaddingRight":3,"scrollBarMargin":0,"itemThumbnailWidth":120,"rollOverItemLabelFontWeight":"normal","itemThumbnailScaleMode":"fit_outside","itemLabelFontStyle":"normal","itemThumbnailBorderRadius":0,"paddingTop":10,"rollOverItemBackgroundOpacity":0,"selectedItemLabelFontColor":"#FFFFFF","maxWidth":800,"itemBackgroundOpacity":0,"itemLabelGap":8,"itemThumbnailShadowSpread":1,"scrollBarColor":"#FFFFFF","minWidth":20,"left":"1%"},{"class":"PanoramaCamera","initialSequence":"this.sequence_17438E28_35EC_E780_41C0_4CEAEF913173","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_camera","enterPointingToHorizon":true},{"id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0","propagateClick":false,"iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0.png","minWidth":1,"transparencyActive":true,"verticalAlign":"middle","data":{"name":"-previous"},"width":92,"backgroundOpacity":0,"visible":false,"horizontalAlign":"center","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","maxWidth":46,"maxHeight":46,"class":"IconButton","left":"1%","bottom":"35%","top":"35%","minHeight":1},{"class":"PanoramaCamera","initialSequence":"this.sequence_1743CE28_35EC_E780_41A4_AA3A43538F26","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_camera","enterPointingToHorizon":true},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Next"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_pressed.png","width":46,"horizontalAlign":"center","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_rollover.png","id":"IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421","iconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421.png"},{"label":trans('panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57.label'),"hfovMin":"150%","data":{"label":"LOCKER"},"class":"Panorama","id":"panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":["ondemand","mobilevr2gen"],"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","url":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512,"width":3072}]}}],"hfov":360,"thumbnailUrl":"media/panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_t.jpg","vfov":180,"hfovMax":130},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA","camera":"this.panorama_1743EA4B_35EC_2F80_41C0_7B06C47489BA_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57","camera":"this.panorama_17436873_35EC_2B80_41B8_6AEB1F3F1E57_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4","camera":"this.panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_174346DF_35EC_E480_4198_B16FF670F779","camera":"this.panorama_174346DF_35EC_E480_4198_B16FF670F779_camera","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"id":"mainPlayList"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"mode":"toggle","verticalAlign":"middle","data":{"name":"Thumblist"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_pressed.png","width":46,"horizontalAlign":"center","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false)}.bind(this); if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839.get('visible')){ visibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839) } else { invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839) }","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_rollover.png","id":"IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354","iconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354.png"},{"class":"PanoramaCamera","initialSequence":"this.sequence_177C7E28_35EC_E780_41C8_666A15CBD623","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_17432F9B_35EC_2487_41C7_4580AC0BA0F4_camera","enterPointingToHorizon":true},{"overflow":"scroll","id":"Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36","propagateClick":false,"scrollBarColor":"#000000","data":{"name":"Right"},"right":"0%","layout":"horizontal","minWidth":1,"children":["this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4","this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181","this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421"],"backgroundOpacity":0,"paddingRight":10,"height":"100%","scrollBarMargin":2,"width":"30%","horizontalAlign":"right","class":"Container","minHeight":1,"verticalAlign":"middle","top":"0%"},{"transparencyActive":true,"propagateClick":false,"minWidth":0,"verticalAlign":"middle","data":{"name":"Collapse"},"height":46,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_pressed.png","width":46,"horizontalAlign":"center","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487); invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_3061B548_231D_5DCD_41B4_93FF66204E67, 'showEffect', false)}.bind(this); visibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0); visibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8); visibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9)","minHeight":0,"class":"IconButton","rollOverIconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_rollover.png","id":"IconButton_128BCB90_1C86_7907_41B3_46B5B135C181","iconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181.png"},{"class":"PanoramaCameraSequence","id":"sequence_177C5E28_35EC_E780_41B4_9790B8CDC617","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"class":"PanoramaCameraSequence","id":"sequence_17438E28_35EC_E780_41C0_4CEAEF913173","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"class":"PanoramaCameraSequence","id":"sequence_1743CE28_35EC_E780_41A4_AA3A43538F26","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"class":"PanoramaCameraSequence","id":"sequence_177C7E28_35EC_E780_41C8_666A15CBD623","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]}],"height":"100%","minHeight":20,"class":"Player","backgroundColor":["#FFFFFF"],"id":"rootPlayer"};
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