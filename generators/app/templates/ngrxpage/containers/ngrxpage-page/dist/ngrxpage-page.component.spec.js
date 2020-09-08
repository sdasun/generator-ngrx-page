"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var testing_2 = require("@angular/router/testing");
var testing_3 = require("@ngrx/store/testing");
var actions_1 = require("src/app/<%= kebabName %>/actions");
var components_1 = require("src/app/<%= kebabName %>/components");
var containers_1 = require("src/app/<%= kebabName %>/containers");
var fromStats = require("src/app/<%= kebabName %>/reducers");
var ellipsis_pipe_1 = require("src/app/shared/pipes/ellipsis.pipe");
var material_1 = require("src/app/material");
describe('Find Stat Page', function () {
    var fixture;
    var store;
    var instance;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.NoopAnimationsModule,
                testing_2.RouterTestingModule,
                material_1.MaterialModule,
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                containers_1.<%= pascalName %>PageComponent,
                components_1.StatSearchComponent,
                StatPreviewComponent,
                StatPreviewListComponent,
                StatAuthorsComponent,
                AddCommasPipe,
                ellipsis_pipe_1.EllipsisPipe,
            ],
            providers: [
                testing_3.provideMockStore({
                    selectors: [
                        { selector: fromStats.selectSearchQuery, value: '' },
                        { selector: fromStats.selectSearchResults, value: [] },
                        { selector: fromStats.selectSearchLoading, value: false },
                        { selector: fromStats.selectSearchError, value: '' },
                    ]
                }),
            ]
        });
        fixture = testing_1.TestBed.createComponent(containers_1.<%= pascalName %>PageComponent);
        instance = fixture.componentInstance;
        store = testing_1.TestBed.inject(testing_3.MockStore);
        spyOn(store, 'dispatch');
    });
    it('should compile', function () {
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should dispatch a stat.Search action on search', function () {
        var $event = 'stat name';
        var action = actions_1.FindModulePageActions.listModules({ query: $event });
        instance.search($event);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });
});
