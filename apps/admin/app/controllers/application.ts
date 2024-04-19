import Controller from '@ember/controller';
import { ADDON_MESSAGE } from '@my-co/shared-ui';

export default class ApplicationController extends Controller {
  appMessage = 'Hey from app';
  addonMessage = ADDON_MESSAGE;
}
