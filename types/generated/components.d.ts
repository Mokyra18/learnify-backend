import type { Schema, Attribute } from '@strapi/strapi';

export interface TopicContent extends Schema.Component {
  collectionName: 'components_topic_contents';
  info: {
    displayName: 'Content';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    input: Attribute.Text;
    output: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface TopicTopic extends Schema.Component {
  collectionName: 'components_topic_topics';
  info: {
    displayName: 'Topic';
    description: '';
  };
  attributes: {
    Topic: Attribute.String;
    Content: Attribute.Component<'topic.content', true>;
  };
}

export interface VideoTopicVideoTopic extends Schema.Component {
  collectionName: 'components_video_topic_video_topics';
  info: {
    displayName: 'VideoTopic';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    description: Attribute.RichText;
    videoUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'topic.content': TopicContent;
      'topic.topic': TopicTopic;
      'video-topic.video-topic': VideoTopicVideoTopic;
    }
  }
}
